-- Generate 3 Featured products to display on homepage from 3 different manufacturers


UPDATE Product SET ISFeatured = 0;  
WITH FeaturedPicks AS (
	SELECT r.*
	FROM
	(
		SELECT	ROW_NUMBER() OVER(Partition By manufacturerid ORDER BY r.manufacturerid) rn,r.ProductID,SKU,ManufacturerID
		FROM	Product r
		WHERE	manufacturerid in 
				(select ManufacturerID from GSKC.dbo.Manufacturers where Name in ('Kershaw', 'Spyderco','Cold Steel')) --'Kershaw', 'Spyderco','Cold Steel'
				AND RetailCost BETWEEN 40 AND 80


	) r
	WHERE r.rn = 10
	--ORDER BY r.productid DESC
)

--select ProductID FROM FeaturedPicks
UPDATE Product SET ISFeatured = 1  WHERE ProductID IN (SELECT ProductID FROM FeaturedPicks)

SELECT * FROM Product WHERE IsFeatured = 1

--select * from GSKC.dbo.Manufacturers where Name in ('Kershaw', 'Spyderco','Cold Steel')