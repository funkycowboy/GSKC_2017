/*-------------------------------------------------
PRODUCTCATEGORY
-------------------------------------------------*/
--TASK: MotengNA to GSKC Sync


----First, Inactivate records that are in the dbo.ProductCategory table but not in the daily file import (removed by supplier)

UPDATE 	pc
SET 	pc.IsActive = 0,
		pc.DateUpdated = GETDATE(),
		pc.UpdatedByUserId = 6				
FROM 	GSKC.dbo.ProductCategory pc 
		LEFT OUTER JOIN MotengNA.dbo.Category c ON pc.Name = c.Name
WHERE	c.Name IS NULL
		AND pc.EnteredByUserID = 6;

----Next, Insert new dbo.category records not already in dbo.ProductCategory
INSERT INTO GSKC.dbo.ProductCategory(Name,EnteredByUserId)
SELECT	DISTINCT c.Name, 6
FROM	MotengNA.dbo.category c
		LEFT OUTER JOIN GSKC.dbo.ProductCategory pc ON c.Name = pc.Name
WHERE   pc.Name IS NULL

----Next, Activate records that are in both the dbo.category/dbo.ProductCategory tables
UPDATE 	pc
SET 	pc.IsActive = 1,
		pc.DateUpdated = GETDATE(),
		pc.UpdatedByUserId = 6				
FROM 	GSKC.dbo.ProductCategory pc 
		INNER JOIN MotengNA.dbo.category c ON pc.Name = c.Name
WHERE	pc.EnteredByUserID = 6;

--/*-------------------------------------------------
--PRODUCTSECTION
---------------------------------------------------*/

------First, Inactivate records that in the dbo.SectionFile table but not in the daily file import (removed by supplier)
--UPDATE 	ps
--SET 	ps.IsActive = 0,
--		ps.DateUpdated = GETDATE(),
--		ps.UpdatedByUserID = 6				
--FROM 	GSKC.dbo.ProductSection ps 
--		LEFT OUTER JOIN Moteng.dbo.SectionFile sf ON ps.Code = sf.Code
--WHERE	sf.Code IS NULL
--		AND ps.EnteredByUserID = 6;

------Next, Insert new dbo.SectionFile records not already in dbo.ProductSection
--INSERT INTO GSKC.dbo.ProductSection(Code,Name,EnteredByUserId)
--SELECT	sf.Code,sf.Name, 6
--FROM	Moteng.dbo.SectionFile sf
--		LEFT OUTER JOIN GSKC.dbo.ProductSection ps ON sf.Code= ps.Code
--WHERE   ps.Code IS NULL

------Next, Activate records that are in both the dbo.SectionFile/dbo.ProductSection tables
--UPDATE 	ps
--SET 	ps.IsActive = 1,
--		ps.DateUpdated = GETDATE(),
--		ps.UpdatedByUserID = 6				
--FROM 	GSKC.dbo.ProductSection ps 
--		INNER JOIN Moteng.dbo.SectionFile sf ON ps.Code = sf.Code
--WHERE	ps.EnteredByUserID = 6;


/*-------------------------------------------------
MANUFACTURERS
-------------------------------------------------*/

----First, Inactivate records in the Manufacturers table but not in the dbo.manufacturer (removed by supplier)
UPDATE 	m
SET 	m.IsActive = 0,
		m.DateUpdated = GETDATE(),
		m.UpdatedByUserID = 6		
FROM 	GSKC.dbo.Manufacturers m 
		LEFT OUTER JOIN MotengNA.dbo.manufacturer m2 ON m.Name = m2.Name
WHERE	m2.Name IS NULL
		AND m.EnteredByUserID = 6;

----Next, Insert new dbo.manufacturer records not already in dbo.Manufacturers
INSERT INTO GSKC.dbo.Manufacturers(Name,EnteredByUserId)
SELECT	DISTINCT m2.Name, 6
FROM	MotengNA.dbo.manufacturer m2
		LEFT OUTER JOIN GSKC.dbo.Manufacturers m ON m2.Name= m.Name
WHERE   m.Name IS NULL

----Next, Activate records that are in both the dbo.BrandFile/dbo.Manufacturers tables
UPDATE 	m
SET 	m.IsActive = 1,
		m.DateUpdated = GETDATE(),
		m.UpdatedByUserID = 6		
FROM 	GSKC.dbo.Manufacturers m 
		INNER JOIN MotengNA.dbo.manufacturer m2 ON m.Name = m2.Name
WHERE	m.EnteredByUserID = 6;




/*-------------------------------------------------
PRODUCT
-------------------------------------------------*/


----First, Inactivate records that in the dbo.product table but not in the daily file import (removed by supplier)
UPDATE 	p
SET 	p.IsActive = 0		
FROM 	GSKC.dbo.Product p 
		LEFT OUTER JOIN MotengNA.dbo.products pf ON p.SKU = pf.SKU
WHERE	pf.SKU IS NULL
		AND p.EnteredByUserID = 6;

WITH    cte
        AS (
			SELECT			
					DISTINCT p.SKU
					,p.[Description] AS ShortDescription
					,p.[Detailed Description] AS LongDescription					
					,cast((convert(decimal(9,2),pric.PRICE) + (convert(decimal(9,2),pric.PRICE)*.40)) AS DECIMAL(9,2)) AS RetailCost
					,p.MSRP as MsrpCost
					,NULL as Column2
					,pric.PRICE AS Dealer
					,0.00 as Column3
					,(SELECT ManufacturerID FROM  GSKC.dbo.Manufacturers WHERE Name = p.Manufacturer) as ManufacturerID
					,6 as EnteredByUserID
					,1 as IsActive
					,0 as IsFeatured
					,inv.QTY AS Available
					,p.MPN AS ManufacturerPartNumber
					,(SELECT ProductCategoryID FROM  GSKC.dbo.ProductCategory WHERE Name = p.[Class   Category]) as ProductCategoryID
					,NULL as ProductSectionID
                    ,p.Weight AS WeightNumber
					,p.[Image Url] AS ImageURL
					,p.[Thumbnail URL] AS ThumbnailURL
			FROM	MotengNA.dbo.products p
					INNER JOIN MotengNA.dbo.pricing pric ON p.SKU = pric.SKU
					INNER JOIN MotengNA.dbo.[ssi-inv] inv ON p.SKU = inv.SKU							
            )

MERGE GSKC.dbo.Product p
USING cte pf
ON p.SKU = pf.SKU

WHEN MATCHED THEN
					----If SKU is in dbo.Product Table, Update record into dbo.Product table
					UPDATE
					SET	p.Name = pf.ShortDescription,
						p.[Description] = pf.LongDescription,
						p.RetailCost = pf.RetailCost,
						p.MsrpCost = pf.MsrpCost,
						p.DealerCost = pf.Dealer,
						p.ShippingCost = NULL,
						p.ManufacturerID = pf.ManufacturerID,
						p.EnteredByUserID = 6,
						p.IsActive = 1,
						--p.IsFeatured = 0,					
						p.Inventory = pf.Available,
						p.ItemNumber = pf.ManufacturerPartNumber,
						p.CategoryID = pf.ProductCategoryID,
						p.SectionID = pf.ProductSectionID,
						p.DateUpdated = GETDATE(),
						p.UpdatedByUserID = 6,
                        p.Weight = pf.WeightNumber,
						p.ImageURL = pf.ImageURL,
						p.ThumbnailURL = pf.ThumbnailURL

WHEN NOT MATCHED THEN	
					-- If SKU is not in dbo.Product Table, Insert record into dbo.Product table
					INSERT
						(SKU,
						Name,
						[Description],						
						RetailCost,
						MsrpCost,
						WholCost,
						DealerCost,
						ShippingCost,
						ManufacturerID,
						EnteredByUserID,
						IsActive,
						IsFeatured,					
						Inventory,
						ItemNumber,
						CategoryID,
						SectionID,
						SupplierID,
						Weight,
						ImageURL,
						ThumbnailURL
						)
				VALUES  (
						pf.SKU,
                        pf.ShortDescription,
						pf.LongDescription,
						pf.RetailCost,
						pf.MsrpCost,
						NULL,
						pf.Dealer,
						NULL,
						pf.ManufacturerID,
						pf.EnteredByUserID,
						1,
						0,					
						pf.Available,
						pf.ManufacturerPartNumber,
						pf.ProductCategoryID,
						pf.ProductSectionID,
						1,
						pf.WeightNumber,
						pf.ImageURL,
						pf.ThumbnailURL
                        ) ; 

    --Update Product Weights with average knife product weight for products where weight is not sepcified

	DECLARE @AverageKnifeProductWeight  FLOAT
	SET @AverageKnifeProductWeight  = (SELECT ROUND(AVG(Weight),2) from GSKC.dbo.Product where Weight > 0  and SectionID = 85)

	Update GSKC.dbo.Product SET Weight = @AverageKnifeProductWeight   WHERE Weight = 0 OR Weight IS NULL;



