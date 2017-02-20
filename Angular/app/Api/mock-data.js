"use strict";
var MockDataService = (function () {
    function MockDataService() {
    }
    MockDataService.prototype.createDb = function () {
        var brands = [
            {
                "Id": 8550,
                "Name": "12 Survivors"
            },
            {
                "Id": 8554,
                "Name": "4id"
            },
            {
                "Id": 8555,
                "Name": "5.11 Tactical"
            },
            {
                "Id": 8557,
                "Name": "A-ZOOM"
            },
            {
                "Id": 8558,
                "Name": "AccuSharp"
            },
            {
                "Id": 8559,
                "Name": "Acme United Corp."
            },
            {
                "Id": 8560,
                "Name": "Acme United-Camillus Knives"
            },
            {
                "Id": 8561,
                "Name": "Adamsbuilt"
            },
            {
                "Id": 8562,
                "Name": "Adventure Medical Kits"
            },
            {
                "Id": 8563,
                "Name": "Adventure Products"
            },
            {
                "Id": 8564,
                "Name": "AGS Brands"
            },
            {
                "Id": 8565,
                "Name": "Ahi"
            },
            {
                "Id": 8566,
                "Name": "AimShot"
            },
            {
                "Id": 8567,
                "Name": "Airhead"
            },
            {
                "Id": 8568,
                "Name": "Al Mar Knives"
            },
            {
                "Id": 8569,
                "Name": "Allen"
            },
            {
                "Id": 8570,
                "Name": "Alpen Outdoor Corporation"
            },
            {
                "Id": 8571,
                "Name": "Alpine Mountain Gear"
            },
            {
                "Id": 8572,
                "Name": "Alps Mountaineering"
            },
            {
                "Id": 8573,
                "Name": "Alta Industries"
            },
            {
                "Id": 8574,
                "Name": "Altus Brands"
            },
            {
                "Id": 8576,
                "Name": "American Hunter"
            },
            {
                "Id": 8577,
                "Name": "Ameristep"
            },
            {
                "Id": 8578,
                "Name": "Apex"
            },
            {
                "Id": 8579,
                "Name": "Aquaforce"
            },
            {
                "Id": 8580,
                "Name": "Aquamira"
            },
            {
                "Id": 8581,
                "Name": "Arctic Ice, LLC"
            },
            {
                "Id": 8582,
                "Name": "ArcticShield"
            },
            {
                "Id": 8583,
                "Name": "Ardent"
            },
            {
                "Id": 8584,
                "Name": "ASP"
            },
            {
                "Id": 8585,
                "Name": "ATI"
            },
            {
                "Id": 8587,
                "Name": "Axcel"
            },
            {
                "Id": 8588,
                "Name": "Axe Broadheads"
            },
            {
                "Id": 8589,
                "Name": "Axion"
            },
            {
                "Id": 8590,
                "Name": "B-Square"
            },
            {
                "Id": 8591,
                "Name": "Bag Boy"
            },
            {
                "Id": 8592,
                "Name": "Balboa Manufacturing"
            },
            {
                "Id": 8593,
                "Name": "Barker Mfg"
            },
            {
                "Id": 8594,
                "Name": "Barnett"
            },
            {
                "Id": 8595,
                "Name": "Barronett"
            },
            {
                "Id": 8596,
                "Name": "Barska"
            },
            {
                "Id": 8597,
                "Name": "Base Camp"
            },
            {
                "Id": 8598,
                "Name": "Bayco"
            },
            {
                "Id": 8599,
                "Name": "Bear Archery"
            },
            {
                "Id": 8600,
                "Name": "Beard Buster"
            },
            {
                "Id": 8601,
                "Name": "Benchmade Knife Co.Inc."
            },
            {
                "Id": 8602,
                "Name": "Benchmaster"
            },
            {
                "Id": 8603,
                "Name": "Benjamin"
            },
            {
                "Id": 8605,
                "Name": "Betts"
            },
            {
                "Id": 8606,
                "Name": "Bianchi"
            },
            {
                "Id": 8607,
                "Name": "Big Game"
            },
            {
                "Id": 8608,
                "Name": "Birchwood Casey"
            },
            {
                "Id": 8609,
                "Name": "Blackhawk"
            },
            {
                "Id": 8610,
                "Name": "Blackwater"
            },
            {
                "Id": 8611,
                "Name": "Blade-Tech Industries"
            },
            {
                "Id": 8612,
                "Name": "BladesUSA"
            },
            {
                "Id": 8613,
                "Name": "BlueWater"
            },
            {
                "Id": 8614,
                "Name": "BluWater Polarized"
            },
            {
                "Id": 8615,
                "Name": "BnM Fishing"
            },
            {
                "Id": 8616,
                "Name": "Boatmates"
            },
            {
                "Id": 8617,
                "Name": "Bob Allen"
            },
            {
                "Id": 8618,
                "Name": "Bobster"
            },
            {
                "Id": 8619,
                "Name": "Bog-Pod"
            },
            {
                "Id": 8620,
                "Name": "Bohning"
            },
            {
                "Id": 8621,
                "Name": "Boker"
            },
            {
                "Id": 8622,
                "Name": "Boker Plus"
            },
            {
                "Id": 8623,
                "Name": "Boker USA"
            },
            {
                "Id": 8624,
                "Name": "Boker USA, Inc."
            },
            {
                "Id": 8625,
                "Name": "Bolle"
            },
            {
                "Id": 8626,
                "Name": "Books"
            },
            {
                "Id": 8627,
                "Name": "Boyt Harness"
            },
            {
                "Id": 8628,
                "Name": "Bradley Smoker"
            },
            {
                "Id": 8629,
                "Name": "Bridgestone"
            },
            {
                "Id": 8630,
                "Name": "Brite Strike"
            },
            {
                "Id": 8631,
                "Name": "Brous Blades"
            },
            {
                "Id": 8632,
                "Name": "Browning Trail Cameras"
            },
            {
                "Id": 8633,
                "Name": "Brunton"
            },
            {
                "Id": 8634,
                "Name": "Brunton Outdoor Inc."
            },
            {
                "Id": 8635,
                "Name": "BTI Tools, LLC"
            },
            {
                "Id": 8636,
                "Name": "Buck Knives"
            },
            {
                "Id": 8637,
                "Name": "Bug Band"
            },
            {
                "Id": 8638,
                "Name": "Bushnell"
            },
            {
                "Id": 8640,
                "Name": "Butler Creek"
            },
            {
                "Id": 8641,
                "Name": "Cablz Inc"
            },
            {
                "Id": 8642,
                "Name": "Caddis Sports"
            },
            {
                "Id": 8643,
                "Name": "Cajun Archery"
            },
            {
                "Id": 8644,
                "Name": "Cajun Bowfishing"
            },
            {
                "Id": 8645,
                "Name": "Caldwell"
            },
            {
                "Id": 8646,
                "Name": "Callaway"
            },
            {
                "Id": 8647,
                "Name": "Camcon"
            },
            {
                "Id": 8648,
                "Name": "Can Cooker"
            },
            {
                "Id": 8649,
                "Name": "Cannon"
            },
            {
                "Id": 8650,
                "Name": "Carbon Express"
            },
            {
                "Id": 8651,
                "Name": "Cass Creek"
            },
            {
                "Id": 8652,
                "Name": "Caviness"
            },
            {
                "Id": 8653,
                "Name": "Celestron"
            },
            {
                "Id": 8654,
                "Name": "Centurion International"
            },
            {
                "Id": 8655,
                "Name": "Char Broil"
            },
            {
                "Id": 8656,
                "Name": "Char-Broil"
            },
            {
                "Id": 8657,
                "Name": "Chums"
            },
            {
                "Id": 8658,
                "Name": "Classic Accessories"
            },
            {
                "Id": 8659,
                "Name": "Cobra"
            },
            {
                "Id": 8660,
                "Name": "Cobra Electronics"
            },
            {
                "Id": 8661,
                "Name": "Coghlan"
            },
            {
                "Id": 8662,
                "Name": "Coghlans"
            },
            {
                "Id": 8663,
                "Name": "Col"
            },
            {
                "Id": 8664,
                "Name": "Cold Steel"
            },
            {
                "Id": 8665,
                "Name": "Cold Steel Inc - Arizona"
            },
            {
                "Id": 8666,
                "Name": "Cold Steel Inc."
            },
            {
                "Id": 8667,
                "Name": "Coleman"
            },
            {
                "Id": 8668,
                "Name": "Columbia River Knife & Tool"
            },
            {
                "Id": 8670,
                "Name": "Combative Edge"
            },
            {
                "Id": 8671,
                "Name": "Command Arms"
            },
            {
                "Id": 8672,
                "Name": "Command Arms Accessories"
            },
            {
                "Id": 8673,
                "Name": "Competition Electronics"
            },
            {
                "Id": 8674,
                "Name": "Condor Tool & Knife"
            },
            {
                "Id": 8675,
                "Name": "Condor Tool/Imacasa Hardware"
            },
            {
                "Id": 8676,
                "Name": "Conquest Scents"
            },
            {
                "Id": 8677,
                "Name": "Convergent Hunting"
            },
            {
                "Id": 8678,
                "Name": "Copper Basin"
            },
            {
                "Id": 8679,
                "Name": "Covert"
            },
            {
                "Id": 8680,
                "Name": "CRKT"
            },
            {
                "Id": 8681,
                "Name": "Crock-Pot"
            },
            {
                "Id": 8682,
                "Name": "Crosman"
            },
            {
                "Id": 8683,
                "Name": "Cuda"
            },
            {
                "Id": 8684,
                "Name": "Cutter"
            },
            {
                "Id": 8685,
                "Name": "Cyber Etrading LLC"
            },
            {
                "Id": 8686,
                "Name": "Cyclops"
            },
            {
                "Id": 8687,
                "Name": "D.T. Systems"
            },
            {
                "Id": 8688,
                "Name": "Daisy"
            },
            {
                "Id": 8689,
                "Name": "Daiwa"
            },
            {
                "Id": 8690,
                "Name": "Daiwa Corp"
            },
            {
                "Id": 8691,
                "Name": "Dakota Watch Co"
            },
            {
                "Id": 8692,
                "Name": "Danielson"
            },
            {
                "Id": 8693,
                "Name": "Dark Side Blades Ballistic"
            },
            {
                "Id": 8694,
                "Name": "Davis Instruments"
            },
            {
                "Id": 8695,
                "Name": "Day 6 Outdoors"
            },
            {
                "Id": 8696,
                "Name": "Deltran"
            },
            {
                "Id": 8697,
                "Name": "DeMarini"
            },
            {
                "Id": 8698,
                "Name": "DeSantis"
            },
            {
                "Id": 8699,
                "Name": "DMT"
            },
            {
                "Id": 8700,
                "Name": "DMT Inc"
            },
            {
                "Id": 8701,
                "Name": "Do-All Traps LLC."
            },
            {
                "Id": 8702,
                "Name": "Do-It Molds"
            },
            {
                "Id": 8703,
                "Name": "Dogtra"
            },
            {
                "Id": 8704,
                "Name": "Dogtra Co"
            },
            {
                "Id": 8705,
                "Name": "DPx Gear, Inc."
            },
            {
                "Id": 8706,
                "Name": "Dual Pro"
            },
            {
                "Id": 8707,
                "Name": "Ducks Unlimited"
            },
            {
                "Id": 8708,
                "Name": "Eagle Claw"
            },
            {
                "Id": 8709,
                "Name": "Eastman Outdoors"
            },
            {
                "Id": 8710,
                "Name": "Echo-Sigma Emergency Systems"
            },
            {
                "Id": 8711,
                "Name": "Eco Vessel, LLC"
            },
            {
                "Id": 8712,
                "Name": "Edge Eyewear"
            },
            {
                "Id": 8713,
                "Name": "Elite"
            },
            {
                "Id": 8715,
                "Name": "Elite Tactical"
            },
            {
                "Id": 8716,
                "Name": "Elk Ridge"
            },
            {
                "Id": 8718,
                "Name": "Energizer"
            },
            {
                "Id": 8719,
                "Name": "Energizer HardCase Tactical"
            },
            {
                "Id": 8720,
                "Name": "EnerPlex"
            },
            {
                "Id": 8721,
                "Name": "EO Tech"
            },
            {
                "Id": 8722,
                "Name": "Epic Camera"
            },
            {
                "Id": 8723,
                "Name": "Eskimo"
            },
            {
                "Id": 8724,
                "Name": "ESS Eyewear"
            },
            {
                "Id": 8725,
                "Name": "Everlast"
            },
            {
                "Id": 8726,
                "Name": "Excalibur"
            },
            {
                "Id": 8727,
                "Name": "Extreme Dimension"
            },
            {
                "Id": 8728,
                "Name": "EZ-Kut Products"
            },
            {
                "Id": 8729,
                "Name": "FAB Defense"
            },
            {
                "Id": 8730,
                "Name": "Fallkniven"
            },
            {
                "Id": 8731,
                "Name": "Fantasy Master"
            },
            {
                "Id": 8732,
                "Name": "Fenix Flashlights"
            },
            {
                "Id": 8733,
                "Name": "Field Logic"
            },
            {
                "Id": 8734,
                "Name": "Field Logic-Block"
            },
            {
                "Id": 8735,
                "Name": "Field Logic-Hurricane"
            },
            {
                "Id": 8736,
                "Name": "Field Logic-IQ"
            },
            {
                "Id": 8737,
                "Name": "Field Logic-Shooter"
            },
            {
                "Id": 8738,
                "Name": "Fin-Nor"
            },
            {
                "Id": 8739,
                "Name": "Firefield"
            },
            {
                "Id": 8740,
                "Name": "First Alert"
            },
            {
                "Id": 8741,
                "Name": "First Edge USA"
            },
            {
                "Id": 8742,
                "Name": "First Gear"
            },
            {
                "Id": 8744,
                "Name": "Fish-On!"
            },
            {
                "Id": 8745,
                "Name": "Fisher Space Pen Co."
            },
            {
                "Id": 8746,
                "Name": "Fisher Space Pens"
            },
            {
                "Id": 8747,
                "Name": "Flambeau"
            },
            {
                "Id": 8748,
                "Name": "Flambeau Hardware"
            },
            {
                "Id": 8749,
                "Name": "Flying Fisherman"
            },
            {
                "Id": 8750,
                "Name": "Fobus"
            },
            {
                "Id": 8751,
                "Name": "FoodSaver"
            },
            {
                "Id": 8752,
                "Name": "FOX KNIVES - Oreste Frati Srl"
            },
            {
                "Id": 8753,
                "Name": "Frabill"
            },
            {
                "Id": 8754,
                "Name": "Frabill Ice"
            },
            {
                "Id": 8755,
                "Name": "Frankford Arsenal"
            },
            {
                "Id": 8756,
                "Name": "Fremont Knives"
            },
            {
                "Id": 8757,
                "Name": "Frogg Toggs"
            },
            {
                "Id": 8758,
                "Name": "Full Throttle"
            },
            {
                "Id": 8759,
                "Name": "Fusion"
            },
            {
                "Id": 8760,
                "Name": "G Outdoors"
            },
            {
                "Id": 8761,
                "Name": "G5"
            },
            {
                "Id": 8762,
                "Name": "Galati Gear"
            },
            {
                "Id": 8763,
                "Name": "Gamakatsu"
            },
            {
                "Id": 8764,
                "Name": "Garett Finney"
            },
            {
                "Id": 8765,
                "Name": "Gargoyles"
            },
            {
                "Id": 8766,
                "Name": "GATCO"
            },
            {
                "Id": 8767,
                "Name": "Genesis"
            },
            {
                "Id": 8770,
                "Name": "Giant International"
            },
            {
                "Id": 8771,
                "Name": "Glacier Glove"
            },
            {
                "Id": 8772,
                "Name": "Global Vision"
            },
            {
                "Id": 8773,
                "Name": "Gould & Goodrich"
            },
            {
                "Id": 8774,
                "Name": "Grabber"
            },
            {
                "Id": 8775,
                "Name": "Grace"
            },
            {
                "Id": 8776,
                "Name": "Great Neck"
            },
            {
                "Id": 8777,
                "Name": "Greatlite"
            },
            {
                "Id": 8778,
                "Name": "Grim Reaper"
            },
            {
                "Id": 8779,
                "Name": "Grizzly"
            },
            {
                "Id": 8780,
                "Name": "Grizzly Fitness"
            },
            {
                "Id": 8781,
                "Name": "GSM Outdoors"
            },
            {
                "Id": 8782,
                "Name": "Guard Dog Security"
            },
            {
                "Id": 8783,
                "Name": "Gunmaster"
            },
            {
                "Id": 8784,
                "Name": "Halo"
            },
            {
                "Id": 8785,
                "Name": "Harris"
            },
            {
                "Id": 8786,
                "Name": "Havalon Knives"
            },
            {
                "Id": 8787,
                "Name": "Hawk Treestands"
            },
            {
                "Id": 8788,
                "Name": "HawkEye"
            },
            {
                "Id": 8789,
                "Name": "Hazard 4"
            },
            {
                "Id": 8790,
                "Name": "Hazard 4 (Civilian Lab, LLC)"
            },
            {
                "Id": 8791,
                "Name": "Hcigar"
            },
            {
                "Id": 8792,
                "Name": "Heat Holders"
            },
            {
                "Id": 8793,
                "Name": "HHA Sports"
            },
            {
                "Id": 8795,
                "Name": "Hiviz"
            },
            {
                "Id": 8796,
                "Name": "Hogue"
            },
            {
                "Id": 8797,
                "Name": "Hogue, Inc."
            },
            {
                "Id": 8798,
                "Name": "Hollywood Collectibles Group, LLC"
            },
            {
                "Id": 8799,
                "Name": "Honeywell Safety Products USA, Inc"
            },
            {
                "Id": 8800,
                "Name": "Hooyman"
            },
            {
                "Id": 8801,
                "Name": "Hoppes"
            },
            {
                "Id": 8802,
                "Name": "Horn Hunter"
            },
            {
                "Id": 8803,
                "Name": "Hornady"
            },
            {
                "Id": 8804,
                "Name": "Hornady Manufacturing"
            },
            {
                "Id": 8805,
                "Name": "Howard Leight"
            },
            {
                "Id": 8806,
                "Name": "Humminbird"
            },
            {
                "Id": 8807,
                "Name": "Humvee"
            },
            {
                "Id": 8808,
                "Name": "Hunter Safety System"
            },
            {
                "Id": 8809,
                "Name": "Hunter's Specialties"
            },
            {
                "Id": 8810,
                "Name": "Hunters Specialties"
            },
            {
                "Id": 8811,
                "Name": "Hurricane"
            },
            {
                "Id": 8812,
                "Name": "HWI Gear, Inc"
            },
            {
                "Id": 8813,
                "Name": "Hydroslide"
            },
            {
                "Id": 8814,
                "Name": "Hydrowave"
            },
            {
                "Id": 8815,
                "Name": "Hyskore"
            },
            {
                "Id": 8816,
                "Name": "Infinity Commerce Inc."
            },
            {
                "Id": 8817,
                "Name": "Inova"
            },
            {
                "Id": 8818,
                "Name": "Insta-Bed"
            },
            {
                "Id": 8819,
                "Name": "Inter Design Inc."
            },
            {
                "Id": 8820,
                "Name": "iQ Pet"
            },
            {
                "Id": 8821,
                "Name": "IQ Sights"
            },
            {
                "Id": 8822,
                "Name": "iSCOPE"
            },
            {
                "Id": 8823,
                "Name": "Izzo"
            },
            {
                "Id": 8824,
                "Name": "Jarden"
            },
            {
                "Id": 8825,
                "Name": "Jetbeam"
            },
            {
                "Id": 8826,
                "Name": "Johnson Outdoors"
            },
            {
                "Id": 8827,
                "Name": "Joy Enterprises"
            },
            {
                "Id": 8828,
                "Name": "Jungle Master"
            },
            {
                "Id": 8829,
                "Name": "Ka-Bar"
            },
            {
                "Id": 8830,
                "Name": "Ka-Bar Knives,Inc."
            },
            {
                "Id": 8831,
                "Name": "Kamp Rite"
            },
            {
                "Id": 8832,
                "Name": "Kamp-Rite"
            },
            {
                "Id": 8833,
                "Name": "Kent Sporting Goods"
            },
            {
                "Id": 8834,
                "Name": "Kershaw"
            },
            {
                "Id": 8835,
                "Name": "Kershaw Knives"
            },
            {
                "Id": 8836,
                "Name": "Kilimanjaro"
            },
            {
                "Id": 8837,
                "Name": "Killer Instinct"
            },
            {
                "Id": 8838,
                "Name": "King Kooker"
            },
            {
                "Id": 8839,
                "Name": "Kizer Cutlery"
            },
            {
                "Id": 8840,
                "Name": "KleenBore"
            },
            {
                "Id": 8841,
                "Name": "Klymit"
            },
            {
                "Id": 8843,
                "Name": "Konus"
            },
            {
                "Id": 8844,
                "Name": "KWC"
            },
            {
                "Id": 8845,
                "Name": "Kwikee Kwiver"
            },
            {
                "Id": 8846,
                "Name": "L.R.I."
            },
            {
                "Id": 8847,
                "Name": "Lansky Sharpeners"
            },
            {
                "Id": 8848,
                "Name": "Laserlyte"
            },
            {
                "Id": 8849,
                "Name": "Lasermax"
            },
            {
                "Id": 8850,
                "Name": "Leapers"
            },
            {
                "Id": 8851,
                "Name": "Lee Fisher"
            },
            {
                "Id": 8852,
                "Name": "Lee Precision"
            },
            {
                "Id": 8853,
                "Name": "Legacy Sports"
            },
            {
                "Id": 8854,
                "Name": "Leica Camera Co."
            },
            {
                "Id": 8855,
                "Name": "LEM Products"
            },
            {
                "Id": 8856,
                "Name": "Les Johnson"
            },
            {
                "Id": 8857,
                "Name": "Lewis N. Clark"
            },
            {
                "Id": 8858,
                "Name": "Lifeline"
            },
            {
                "Id": 8859,
                "Name": "LighterBro LLC."
            },
            {
                "Id": 8860,
                "Name": "Limbsaver"
            },
            {
                "Id": 8861,
                "Name": "Liong Mah LMD, LLC"
            },
            {
                "Id": 8862,
                "Name": "Live Target"
            },
            {
                "Id": 8863,
                "Name": "Lockdown"
            },
            {
                "Id": 8864,
                "Name": "Lodge Manufacturing Company"
            },
            {
                "Id": 8865,
                "Name": "Logo Chair"
            },
            {
                "Id": 8866,
                "Name": "LOKI Nets"
            },
            {
                "Id": 8867,
                "Name": "Louisville Slugger"
            },
            {
                "Id": 8868,
                "Name": "Lowrance"
            },
            {
                "Id": 8870,
                "Name": "LuxPro"
            },
            {
                "Id": 8871,
                "Name": "Lyman"
            },
            {
                "Id": 8872,
                "Name": "M&P Accessories"
            },
            {
                "Id": 8873,
                "Name": "MadDog Gear"
            },
            {
                "Id": 8874,
                "Name": "Mag Instruments"
            },
            {
                "Id": 8875,
                "Name": "Magellan"
            },
            {
                "Id": 8876,
                "Name": "Magic Cool"
            },
            {
                "Id": 8877,
                "Name": "Maglite"
            },
            {
                "Id": 8878,
                "Name": "Maglula"
            },
            {
                "Id": 8879,
                "Name": "Magnum"
            },
            {
                "Id": 8880,
                "Name": "Mantis Knives"
            },
            {
                "Id": 8881,
                "Name": "Marcum"
            },
            {
                "Id": 8882,
                "Name": "Margaritaville"
            },
            {
                "Id": 8883,
                "Name": "Marine Metal"
            },
            {
                "Id": 8884,
                "Name": "Marine Metal Products"
            },
            {
                "Id": 8885,
                "Name": "Marksman"
            },
            {
                "Id": 8886,
                "Name": "Marksman/Beeman Products"
            },
            {
                "Id": 8887,
                "Name": "Martin Archery"
            },
            {
                "Id": 8888,
                "Name": "Martin Fishing"
            },
            {
                "Id": 8889,
                "Name": "Marttiini Oy"
            },
            {
                "Id": 8890,
                "Name": "Master"
            },
            {
                "Id": 8891,
                "Name": "Master Collection Ballistic"
            },
            {
                "Id": 8892,
                "Name": "Master Cutlery"
            },
            {
                "Id": 8893,
                "Name": "MAX Cases"
            },
            {
                "Id": 8894,
                "Name": "MAX Grip"
            },
            {
                "Id": 8895,
                "Name": "Maxpedition"
            },
            {
                "Id": 8896,
                "Name": "Maxpedition Hard-Use Gear"
            },
            {
                "Id": 8897,
                "Name": "Meade"
            },
            {
                "Id": 8898,
                "Name": "Mechanix Wear, Inc."
            },
            {
                "Id": 8899,
                "Name": "Medford"
            },
            {
                "Id": 8900,
                "Name": "Medford Knife & Tool"
            },
            {
                "Id": 8901,
                "Name": "Mepps"
            },
            {
                "Id": 8902,
                "Name": "Meprolight"
            },
            {
                "Id": 8903,
                "Name": "Merchants of Golf"
            },
            {
                "Id": 8904,
                "Name": "Meyerco"
            },
            {
                "Id": 8905,
                "Name": "Millenium Treestand"
            },
            {
                "Id": 8906,
                "Name": "Millennium Treestands"
            },
            {
                "Id": 8907,
                "Name": "Millett"
            },
            {
                "Id": 8908,
                "Name": "Minn Kota"
            },
            {
                "Id": 8909,
                "Name": "Minox USA"
            },
            {
                "Id": 8910,
                "Name": "Mission Critical Designs, LLC"
            },
            {
                "Id": 8911,
                "Name": "Mister Twister"
            },
            {
                "Id": 8912,
                "Name": "Mizuno"
            },
            {
                "Id": 8913,
                "Name": "Moeller"
            },
            {
                "Id": 8914,
                "Name": "Morrell"
            },
            {
                "Id": 8915,
                "Name": "Mossberg"
            },
            {
                "Id": 8916,
                "Name": "Mossy Oak Hunt"
            },
            {
                "Id": 8917,
                "Name": "Motorguide"
            },
            {
                "Id": 8918,
                "Name": "Mountain House"
            },
            {
                "Id": 8919,
                "Name": "Mr Beer"
            },
            {
                "Id": 8920,
                "Name": "Mr Heater"
            },
            {
                "Id": 8921,
                "Name": "Mr. Coffee"
            },
            {
                "Id": 8922,
                "Name": "MTech"
            },
            {
                "Id": 8923,
                "Name": "MTech Xtreme"
            },
            {
                "Id": 8924,
                "Name": "MTM Molded Products"
            },
            {
                "Id": 8925,
                "Name": "Muddy"
            },
            {
                "Id": 8926,
                "Name": "Mueller"
            },
            {
                "Id": 8927,
                "Name": "Multimat"
            },
            {
                "Id": 8928,
                "Name": "Muzzy"
            },
            {
                "Id": 8929,
                "Name": "Nash"
            },
            {
                "Id": 8930,
                "Name": "National Geographic Snorkeler"
            },
            {
                "Id": 8931,
                "Name": "Navionics"
            },
            {
                "Id": 8932,
                "Name": "NDuR"
            },
            {
                "Id": 8933,
                "Name": "Nectar Sunglasses"
            },
            {
                "Id": 8934,
                "Name": "New Archery Products"
            },
            {
                "Id": 8935,
                "Name": "Nextorch"
            },
            {
                "Id": 8936,
                "Name": "Night Owl Optics"
            },
            {
                "Id": 8937,
                "Name": "Nikko Stirling"
            },
            {
                "Id": 8938,
                "Name": "Nite Ize"
            },
            {
                "Id": 8939,
                "Name": "Nite Ize Inc."
            },
            {
                "Id": 8940,
                "Name": "Nitecore (Sysmax Industrial)"
            },
            {
                "Id": 8941,
                "Name": "Nitro Golf"
            },
            {
                "Id": 8942,
                "Name": "Nockturnal"
            },
            {
                "Id": 8943,
                "Name": "NorChill"
            },
            {
                "Id": 8944,
                "Name": "Norcold"
            },
            {
                "Id": 8945,
                "Name": "Normark"
            },
            {
                "Id": 8946,
                "Name": "Northstar Bags"
            },
            {
                "Id": 8947,
                "Name": "OEM"
            },
            {
                "Id": 8948,
                "Name": "Okuma"
            },
            {
                "Id": 8949,
                "Name": "Old Timer"
            },
            {
                "Id": 8950,
                "Name": "Ontario Knife Company"
            },
            {
                "Id": 8951,
                "Name": "Onyx Outdoor"
            },
            {
                "Id": 8952,
                "Name": "Optronics"
            },
            {
                "Id": 8953,
                "Name": "Organized Fishing"
            },
            {
                "Id": 8954,
                "Name": "Osage River Gear"
            },
            {
                "Id": 8955,
                "Name": "Oster"
            },
            {
                "Id": 8956,
                "Name": "Otis Technology"
            },
            {
                "Id": 8957,
                "Name": "Otter Outdoors"
            },
            {
                "Id": 8958,
                "Name": "Outdoor Edge Cutlery Corp."
            },
            {
                "Id": 8959,
                "Name": "Ozark Rods"
            },
            {
                "Id": 8960,
                "Name": "Pachmayr"
            },
            {
                "Id": 8961,
                "Name": "Palco"
            },
            {
                "Id": 8962,
                "Name": "Panteao"
            },
            {
                "Id": 8963,
                "Name": "Peet Shoe Dryer"
            },
            {
                "Id": 8964,
                "Name": "Pelican"
            },
            {
                "Id": 8965,
                "Name": "Perfect Point"
            },
            {
                "Id": 8966,
                "Name": "PG Professional Golf"
            },
            {
                "Id": 8967,
                "Name": "Plano"
            },
            {
                "Id": 8968,
                "Name": "Power Products"
            },
            {
                "Id": 8969,
                "Name": "Predator Tactics"
            },
            {
                "Id": 8970,
                "Name": "Primos"
            },
            {
                "Id": 8971,
                "Name": "Princeton Tec"
            },
            {
                "Id": 8972,
                "Name": "Pro Ears"
            },
            {
                "Id": 8973,
                "Name": "Pro Hear"
            },
            {
                "Id": 8974,
                "Name": "Pro Mariner"
            },
            {
                "Id": 8975,
                "Name": "Proelia"
            },
            {
                "Id": 8976,
                "Name": "ProForce Equipment, Inc."
            },
            {
                "Id": 8977,
                "Name": "ProMag"
            },
            {
                "Id": 8978,
                "Name": "Promar"
            },
            {
                "Id": 8979,
                "Name": "Propel"
            },
            {
                "Id": 8980,
                "Name": "PS Products, Inc."
            },
            {
                "Id": 8981,
                "Name": "Pulsar"
            },
            {
                "Id": 8982,
                "Name": "Pulsetech"
            },
            {
                "Id": 8983,
                "Name": "PUMA"
            },
            {
                "Id": 8984,
                "Name": "Pyramex"
            },
            {
                "Id": 8985,
                "Name": "Pyramex/Venturegear"
            },
            {
                "Id": 8986,
                "Name": "Quality Archery Designs"
            },
            {
                "Id": 8987,
                "Name": "Quantum"
            },
            {
                "Id": 8988,
                "Name": "Rage"
            },
            {
                "Id": 8989,
                "Name": "Rainmaker Imports"
            },
            {
                "Id": 8990,
                "Name": "Ram Mounts"
            },
            {
                "Id": 8991,
                "Name": "Rambo Bikes"
            },
            {
                "Id": 8992,
                "Name": "Rapala"
            },
            {
                "Id": 8993,
                "Name": "Rawlings"
            },
            {
                "Id": 8994,
                "Name": "Ready America"
            },
            {
                "Id": 8995,
                "Name": "Real Avid"
            },
            {
                "Id": 8996,
                "Name": "Real Kids Shades"
            },
            {
                "Id": 8997,
                "Name": "Red Rock Outdoor Gear"
            },
            {
                "Id": 8998,
                "Name": "Reliance"
            },
            {
                "Id": 8999,
                "Name": "Reliance Products"
            },
            {
                "Id": 9000,
                "Name": "Renegade"
            },
            {
                "Id": 9001,
                "Name": "Renegade Tactical Steel"
            },
            {
                "Id": 9002,
                "Name": "Repel"
            },
            {
                "Id": 9003,
                "Name": "Rifleman"
            },
            {
                "Id": 9004,
                "Name": "Rival"
            },
            {
                "Id": 9005,
                "Name": "Rivers Edge"
            },
            {
                "Id": 9006,
                "Name": "Riversedge"
            },
            {
                "Id": 9007,
                "Name": "Robinson Outdoor Products"
            },
            {
                "Id": 9008,
                "Name": "Ronco"
            },
            {
                "Id": 9009,
                "Name": "Ruger"
            },
            {
                "Id": 9010,
                "Name": "SA Sports"
            },
            {
                "Id": 9011,
                "Name": "Safariland"
            },
            {
                "Id": 9012,
                "Name": "Safariland Group"
            },
            {
                "Id": 9013,
                "Name": "Sandpiper"
            },
            {
                "Id": 9014,
                "Name": "Savage Gear"
            },
            {
                "Id": 9015,
                "Name": "Scent Blocker"
            },
            {
                "Id": 9016,
                "Name": "ScentBlocker"
            },
            {
                "Id": 9017,
                "Name": "Scepter Manufacturing, LLC."
            },
            {
                "Id": 9018,
                "Name": "Schawbel"
            },
            {
                "Id": 9019,
                "Name": "Schrade"
            },
            {
                "Id": 9020,
                "Name": "Scientific Anglers"
            },
            {
                "Id": 9021,
                "Name": "Scott Archery"
            },
            {
                "Id": 9022,
                "Name": "Scotty Fishing"
            },
            {
                "Id": 9023,
                "Name": "Sea Eagle"
            },
            {
                "Id": 9024,
                "Name": "Seaguar"
            },
            {
                "Id": 9025,
                "Name": "SeaSense"
            },
            {
                "Id": 9026,
                "Name": "Seirus"
            },
            {
                "Id": 9027,
                "Name": "Serengeti"
            },
            {
                "Id": 9028,
                "Name": "Sevylor"
            },
            {
                "Id": 9029,
                "Name": "Sheffield"
            },
            {
                "Id": 9030,
                "Name": "Shooting Chrony"
            },
            {
                "Id": 9031,
                "Name": "Shoreline Marine"
            },
            {
                "Id": 9032,
                "Name": "Sig Sauer"
            },
            {
                "Id": 9033,
                "Name": "Sighting Instrument Systems"
            },
            {
                "Id": 9034,
                "Name": "Sightmark"
            },
            {
                "Id": 9035,
                "Name": "Silky Saws"
            },
            {
                "Id": 9036,
                "Name": "Simmons"
            },
            {
                "Id": 9037,
                "Name": "SKB"
            },
            {
                "Id": 9038,
                "Name": "SkyGolf"
            },
            {
                "Id": 9039,
                "Name": "Slick Trick"
            },
            {
                "Id": 9040,
                "Name": "Slumberjack"
            },
            {
                "Id": 9041,
                "Name": "Smith & Wesson"
            },
            {
                "Id": 9043,
                "Name": "Smith's"
            },
            {
                "Id": 9044,
                "Name": "Smith's Consumer Products, Inc."
            },
            {
                "Id": 9045,
                "Name": "Smokehouse"
            },
            {
                "Id": 9046,
                "Name": "Smokehouse Products"
            },
            {
                "Id": 9047,
                "Name": "Snug Fit"
            },
            {
                "Id": 9048,
                "Name": "Snugpak"
            },
            {
                "Id": 9049,
                "Name": "SOG"
            },
            {
                "Id": 9050,
                "Name": "SOG Knives & Tools"
            },
            {
                "Id": 9051,
                "Name": "Solvit"
            },
            {
                "Id": 9052,
                "Name": "Solvit Products"
            },
            {
                "Id": 9053,
                "Name": "South Bend"
            },
            {
                "Id": 9054,
                "Name": "Southern Pro"
            },
            {
                "Id": 9055,
                "Name": "Splash"
            },
            {
                "Id": 9056,
                "Name": "Sport Ear"
            },
            {
                "Id": 9057,
                "Name": "SportLock by Birchwood Casey"
            },
            {
                "Id": 9058,
                "Name": "SportsStuff"
            },
            {
                "Id": 9059,
                "Name": "Spyderco"
            },
            {
                "Id": 9060,
                "Name": "Spyderco, Inc."
            },
            {
                "Id": 9061,
                "Name": "Spypoint"
            },
            {
                "Id": 9062,
                "Name": "Srixon"
            },
            {
                "Id": 9064,
                "Name": "Stack-On"
            },
            {
                "Id": 9065,
                "Name": "Stanley"
            },
            {
                "Id": 9066,
                "Name": "Stansport"
            },
            {
                "Id": 9067,
                "Name": "Stealth Cam"
            },
            {
                "Id": 9068,
                "Name": "STEARNS"
            },
            {
                "Id": 9069,
                "Name": "Streamlight"
            },
            {
                "Id": 9070,
                "Name": "Streamlight Inc."
            },
            {
                "Id": 9071,
                "Name": "Strike King"
            },
            {
                "Id": 9072,
                "Name": "StrikeMaster"
            },
            {
                "Id": 9073,
                "Name": "Sunbeam"
            },
            {
                "Id": 9074,
                "Name": "Surf to Summit"
            },
            {
                "Id": 9076,
                "Name": "Survivor"
            },
            {
                "Id": 9077,
                "Name": "Suunto (Amer Sports)"
            },
            {
                "Id": 9079,
                "Name": "Swhacker"
            },
            {
                "Id": 9080,
                "Name": "SwingClick"
            },
            {
                "Id": 9081,
                "Name": "Swiss+Tech"
            },
            {
                "Id": 9082,
                "Name": "Swiss+Tech Products"
            },
            {
                "Id": 9083,
                "Name": "T.R.U. Ball"
            },
            {
                "Id": 9084,
                "Name": "Tac Force"
            },
            {
                "Id": 9086,
                "Name": "Tac-Star"
            },
            {
                "Id": 9087,
                "Name": "Tackle Webs"
            },
            {
                "Id": 9088,
                "Name": "Tackobox"
            },
            {
                "Id": 9089,
                "Name": "Tacprogear, LLC"
            },
            {
                "Id": 9090,
                "Name": "Tailgaterz"
            },
            {
                "Id": 9091,
                "Name": "Talley Manufacturing"
            },
            {
                "Id": 9092,
                "Name": "Tanfoglio"
            },
            {
                "Id": 9093,
                "Name": "Tarantula"
            },
            {
                "Id": 9094,
                "Name": "Tasco"
            },
            {
                "Id": 9095,
                "Name": "Taylor Brands"
            },
            {
                "Id": 9096,
                "Name": "Team Golf"
            },
            {
                "Id": 9097,
                "Name": "Tempress"
            },
            {
                "Id": 9098,
                "Name": "TenRyu"
            },
            {
                "Id": 9099,
                "Name": "TerraLUX"
            },
            {
                "Id": 9100,
                "Name": "Texsport"
            },
            {
                "Id": 9101,
                "Name": "Therm-A-Seat"
            },
            {
                "Id": 9102,
                "Name": "Thermacell Repellants Inc."
            },
            {
                "Id": 9103,
                "Name": "Thermacell Technologies"
            },
            {
                "Id": 9104,
                "Name": "Thetford"
            },
            {
                "Id": 9105,
                "Name": "Timney Triggers"
            },
            {
                "Id": 9106,
                "Name": "Tipton"
            },
            {
                "Id": 9107,
                "Name": "Tool Logic"
            },
            {
                "Id": 9108,
                "Name": "Top Dawg"
            },
            {
                "Id": 9109,
                "Name": "Tour Edge"
            },
            {
                "Id": 9110,
                "Name": "TRC Recreation"
            },
            {
                "Id": 9111,
                "Name": "Tree Spider"
            },
            {
                "Id": 9112,
                "Name": "Trimax"
            },
            {
                "Id": 9113,
                "Name": "Triumph Systems"
            },
            {
                "Id": 9114,
                "Name": "Trophy Ridge"
            },
            {
                "Id": 9115,
                "Name": "Tru Fire"
            },
            {
                "Id": 9116,
                "Name": "Tru-Fire"
            },
            {
                "Id": 9117,
                "Name": "TruGlo"
            },
            {
                "Id": 9118,
                "Name": "Ultimate Survival Technologies"
            },
            {
                "Id": 9119,
                "Name": "Ultimate Survival Technologies LLC"
            },
            {
                "Id": 9120,
                "Name": "Umarex"
            },
            {
                "Id": 9121,
                "Name": "Uncle Henry"
            },
            {
                "Id": 9122,
                "Name": "Uncle Mikes"
            },
            {
                "Id": 9123,
                "Name": "Under Armour"
            },
            {
                "Id": 9124,
                "Name": "Underwater Kinetics"
            },
            {
                "Id": 9125,
                "Name": "Unified Marine"
            },
            {
                "Id": 9126,
                "Name": "United"
            },
            {
                "Id": 9127,
                "Name": "United Cutlery"
            },
            {
                "Id": 9128,
                "Name": "US Army"
            },
            {
                "Id": 9129,
                "Name": "UST"
            },
            {
                "Id": 9130,
                "Name": "UST Brands"
            },
            {
                "Id": 9131,
                "Name": "UTG"
            },
            {
                "Id": 9132,
                "Name": "UZI"
            },
            {
                "Id": 9133,
                "Name": "Vargo"
            },
            {
                "Id": 9134,
                "Name": "Venture Gear"
            },
            {
                "Id": 9135,
                "Name": "Vicious Fishing"
            },
            {
                "Id": 9136,
                "Name": "Volvik"
            },
            {
                "Id": 9137,
                "Name": "Wac'em Archery Products"
            },
            {
                "Id": 9138,
                "Name": "Walker's"
            },
            {
                "Id": 9139,
                "Name": "Walkers"
            },
            {
                "Id": 9140,
                "Name": "Warne"
            },
            {
                "Id": 9141,
                "Name": "Webley"
            },
            {
                "Id": 9142,
                "Name": "WeeGo"
            },
            {
                "Id": 9143,
                "Name": "Wells Lamont"
            },
            {
                "Id": 9144,
                "Name": "Wenzel"
            },
            {
                "Id": 9145,
                "Name": "Western River"
            },
            {
                "Id": 9146,
                "Name": "Wheeler"
            },
            {
                "Id": 9147,
                "Name": "White Mountain"
            },
            {
                "Id": 9148,
                "Name": "Whitetail'R"
            },
            {
                "Id": 9149,
                "Name": "Wicked Ridge"
            },
            {
                "Id": 9150,
                "Name": "Wicked Tree Gear"
            },
            {
                "Id": 9151,
                "Name": "Wild River"
            },
            {
                "Id": 9152,
                "Name": "Wildgame"
            },
            {
                "Id": 9153,
                "Name": "WILDO"
            },
            {
                "Id": 9156,
                "Name": "Wilson"
            },
            {
                "Id": 9157,
                "Name": "Wilson Combat Knives"
            },
            {
                "Id": 9158,
                "Name": "Winchester"
            },
            {
                "Id": 9159,
                "Name": "Wise Foods"
            },
            {
                "Id": 9160,
                "Name": "Work Sharp"
            },
            {
                "Id": 9161,
                "Name": "Wright & McGill"
            },
            {
                "Id": 9162,
                "Name": "X-Stand"
            },
            {
                "Id": 9163,
                "Name": "XGrid"
            },
            {
                "Id": 9164,
                "Name": "Z-Hunter"
            },
            {
                "Id": 9165,
                "Name": "ZANheadgear"
            },
            {
                "Id": 9166,
                "Name": "Zebco"
            },
            {
                "Id": 9167,
                "Name": "Zero Friction"
            },
            {
                "Id": 9168,
                "Name": "Zippo"
            },
            {
                "Id": 9169,
                "Name": "Zippo Manufacturing Company"
            },
            {
                "Id": 9170,
                "Name": "Zoinx"
            },
            {
                "Id": 9171,
                "Name": "BTI TOOLS"
            },
            {
                "Id": 9172,
                "Name": "Fury"
            },
            {
                "Id": 9173,
                "Name": "Meford Knife and Tool"
            }
        ];
        var categories = [
            {
                "Id": 13383,
                "Name": "Knives : Accessories"
            },
            {
                "Id": 13384,
                "Name": "Knives : Apparel"
            },
            {
                "Id": 13385,
                "Name": "Knives : Axes-Tomahawks"
            },
            {
                "Id": 13386,
                "Name": "Knives : Blowgun"
            },
            {
                "Id": 13387,
                "Name": "Knives : Cases"
            },
            {
                "Id": 13388,
                "Name": "Knives : Defensive Tools"
            },
            {
                "Id": 13389,
                "Name": "Knives : Electric"
            },
            {
                "Id": 13390,
                "Name": "Knives : Fillet"
            },
            {
                "Id": 13391,
                "Name": "Knives : Fixed Blade"
            },
            {
                "Id": 13392,
                "Name": "Knives : Folding Blade"
            },
            {
                "Id": 13393,
                "Name": "Knives : Knife Sets"
            },
            {
                "Id": 13394,
                "Name": "Knives : Machetes"
            },
            {
                "Id": 13395,
                "Name": "Knives : Multi-Tools"
            },
            {
                "Id": 13396,
                "Name": "Knives : Neck Knife"
            },
            {
                "Id": 13397,
                "Name": "Knives : Other"
            },
            {
                "Id": 13398,
                "Name": "Knives : Saws"
            },
            {
                "Id": 13399,
                "Name": "Knives : Sharpeners"
            },
            {
                "Id": 13400,
                "Name": "Knives : Sheaths"
            },
            {
                "Id": 13401,
                "Name": "Knives : Shovels"
            },
            {
                "Id": 13402,
                "Name": "Knives : Spears"
            },
            {
                "Id": 13403,
                "Name": "Knives : Swords"
            },
            {
                "Id": 13404,
                "Name": "Knives : Tools"
            },
            {
                "Id": 13405,
                "Name": "Knives : Walking Sticks"
            }
        ];
        var prices = [
            { Id: 1, Name: '$1.00 - $9.99' },
            { Id: 2, Name: '$10.00 - $24.99' },
            { Id: 3, Name: '$25.00 - $49.99' },
            { Id: 4, Name: '$50.00 - $74.99' },
            { Id: 5, Name: '$75.00 - $99.99' },
            { Id: 6, Name: '$100.00 and over' },
        ];
        var slideshowImages = [
            { id: 1, name: '', path: '/Images//Slideshow/slide-show-image-1.jpg' },
            { id: 2, name: '', path: '/Images/Slideshow/slide-show-image-2.jpg' },
            { id: 3, name: '', path: '/Images/Slideshow/slide-show-image-3.jpg' },
            { id: 4, name: '', path: '/Images/Slideshow/slide-show-image-4.jpg' },
            { id: 5, name: '', path: '/Images/Slideshow/slide-show-image-5.jpg' },
            { id: 6, name: '', path: '/Images/Slideshow/slide-show-image-6.jpg' },
            { id: 7, name: '', path: '/Images/Slideshow/slide-show-image-7.jpg' },
            { id: 8, name: '', path: '/Images/Slideshow/slide-show-image-8.jpg' },
            { id: 9, name: '', path: '/Images/Slideshow/slide-show-image-9.png' },
            { id: 10, name: '', path: '/Images/Slideshow/slide-show-image-10.jpg' },
        ];
        var products = [
            {
                "Id": 374972,
                "SKU": "4008304",
                "Description": "This â€œfree standingâ€ backpack allows for hands free transportation to and from the range. The â€œHandgunner Backpackâ€ was designed to allow the avid handgun shooter a way to transport their handguns, 12 extra magazines, ammo, shooting glasses, ear protection, targets, stapler, tape, binos, shooting mats, cleaning supplies all in a compact backpack. By utilizing the visual ID storage system G.P.S. has designed separate pockets that store your most frequently used items for added protection and easy retrieval. The most unique feature is the inside storage cradle that slides in and out of the lower compartment. This foam cradle was designed to hold 4 medium to small size handguns in a vertical format. This vertical format allows for ease of use at the range and added protection from 360 degrees. This Cradle is made of high density foam and is cut with a CNC machine to cradle each pistol by its trigger guard. Just slide out the cradle at the range and keep all 4 pistols organized. After shooting, remove the cradle with the handguns inside for cleaning and then for storage in your gun safe. No need to open and close pistol cases or rugs each time you intend to use. The â€œHandgunnerâ€ backpack also features a waterproof pull out cover to help keep the contents dry in case of a sudden downpour.",
                "Name": "G.P.S. Handgunner Backpack Tan",
                "ItemNumber": "GPS-1711BPT",
                "RetailPrice": 124.25,
                "ImageUrl": "http://www.motengna.com/core/media/media.nl?id=2935413&c=902676&h=7b517345f374c68c8d41",
                "SupplierId": 1,
                "SupplierName": "Moteng",
                "ManufacturerId": 8760,
                "ManufacturerName": "G Outdoors",
                "CategoryId": 13444,
                "CategoryName": "Shooting : Accessories"
            },
            {
                "Id": 374973,
                "SKU": "4008319",
                "Description": "The original model of the Urban Trapper from Brad Zinker has quickly developed into one of the most popular gentleman's knives from BÃ¶ker Plus. The extremely low-profile and slender design in combination with refined materials such as VG-10, titanium and an IKBS hinge result in an incomparable pocketknife for demanding tastes. This version offers additional scales on the titanium handle, which provide a slightly fuller grip feel in addition to a special visual appeal. Overall 7 2/3\". Blade 3 3/7\". Weight approx. 1.8 oz.",
                "Name": "Boker Plus Urban Trapper 3 1/2\" Blade w/G-10 Handle",
                "ItemNumber": "01BO732",
                "RetailPrice": 83.71,
                "ImageUrl": "http://www.motengna.com/core/media/media.nl?id=3191198&c=902676&h=c007f8d766118c333b19",
                "SupplierId": 1,
                "SupplierName": "Moteng",
                "ManufacturerId": 8622,
                "ManufacturerName": "Boker Plus",
                "CategoryId": 13392,
                "CategoryName": "Knives : Folding Blade"
            },
            {
                "Id": 374974,
                "SKU": "4008368",
                "Description": "Tundra Series Freezer Panels have a very unique freezing point of 5 degrees F and are designed to help maintain a consistent freezer temperature in coolers. While not as cold as dry ice, Tundra freezer panels can be used as a suitable replacement. The panels have been shown to maintain days of frozen temperatures in controlled testing. Due to its low freezing point, Tundra freezer panels can take 18-24 hours to freeze. Turn freezer to the lowest setting to ensure freezing. It is recommended that these panels be used to maintain frozen goods. Use weight equivalent to dry ice needed for great reusable results. Store in freezer when not using so they are ready when needed. The ice size is medium.",
                "Name": "Tundra Series 5 Degree High Performance Cooler Pak-Ice Med",
                "ItemNumber": "1203",
                "RetailPrice": 17.82,
                "ImageUrl": "http://www.motengna.com/core/media/media.nl?id=3132313&c=902676&h=76d9215daedefbe5a415",
                "SupplierId": 1,
                "SupplierName": "Moteng",
                "ManufacturerId": 8581,
                "ManufacturerName": "Arctic Ice, LLC",
                "CategoryId": 13262,
                "CategoryName": "Camping : Coolers"
            },
            {
                "Id": 374975,
                "SKU": "4008375",
                "Description": "Chillin' Brew offers the beer drinker, the absolutely best opportunity for the coldest beer possible!  Arctic Ice Chillin' Brew Panel in collegiate color royal blue, in a cooler can keep beer at the perfect drinking temperature longer than ice without the mess or waste. Inside Chillin' Brew panel, the active ingredient changes phases, or freezes at a temperature just above the temperature beer would freeze. This material manipulates the temperature of beer to constantly remain even colder than ice. In fact, Chillin' Brew panel could possibly produce the coldest beer in the entire world! As an added bonus - Chillin' Brew is reusable for a lifetime! To recharge the panels, just pop them in the freezer for 6-10 hours and Chillin' Brew's ready to party! Chillin' Brews active ingredient has been tested for up to 100,000 freeze/thaw cycles without any change in its effectiveness. In addition to being the best way to keep beer at a \"beer cave\" temperature, Chillin' Brew is environmentally friendly. The unique phase change material used in Chillin' Brew is made from animal food stocks and is completely biodegradable and harmless should it ever leak.",
                "Name": "Chillin Brew 28 Degree Collegiate Royal Blue Ice Panel-XL",
                "ItemNumber": "1212",
                "RetailPrice": 27.64,
                "ImageUrl": "http://www.motengna.com/core/media/media.nl?id=3132320&c=902676&h=de10119bd9341058bac7",
                "SupplierId": 1,
                "SupplierName": "Moteng",
                "ManufacturerId": 8581,
                "ManufacturerName": "Arctic Ice, LLC",
                "CategoryId": 13262,
                "CategoryName": "Camping : Coolers"
            },
            {
                "Id": 374976,
                "SKU": "4008378",
                "Description": "Chillin' Brew offers the beer drinker, the absolutely best opportunity for the coldest beer possible!  Arctic Ice Chillin' Brew Panel in collegiate color red, in a cooler can keep beer at the perfect drinking temperature longer than ice without the mess or waste. Inside Chillin' Brew panel, the active ingredient changes phases, or freezes at a temperature just above the temperature beer would freeze. This material manipulates the temperature of beer to constantly remain even colder than ice. In fact, Chillin' Brew panel could possibly produce the coldest beer in the entire world! As an added bonus - Chillin' Brew is reusable for a lifetime! To recharge the panels, just pop them in the freezer for 6-10 hours and Chillin' Brew's ready to party! Chillin' Brews active ingredient has been tested for up to 100,000 freeze/thaw cycles without any change in its effectiveness. In addition to being the best way to keep beer at a \"beer cave\" temperature, Chillin' Brew is environmentally friendly. The unique phase change material used in Chillin' Brew is made from animal food stocks and is completely biodegradable and harmless should it ever leak.",
                "Name": "Chillin Brew 28 Degree Collegiate Red Ice Panel-XL",
                "ItemNumber": "1215",
                "RetailPrice": 27.64,
                "ImageUrl": "http://www.motengna.com/core/media/media.nl?id=3132323&c=902676&h=ad2a1ed470aec30e57a4",
                "SupplierId": 1,
                "SupplierName": "Moteng",
                "ManufacturerId": 8581,
                "ManufacturerName": "Arctic Ice, LLC",
                "CategoryId": 13262,
                "CategoryName": "Camping : Coolers"
            },
            {
                "Id": 374977,
                "SKU": "2006060",
                "Description": "100% Acrylic knit cap. The front features the Kanji characters meaning Master Bladesmith and the words Cold Steel Knives on the back. Available in black or gray.",
                "Name": "Cold Steel Knit Cap 94HCSKBB",
                "ItemNumber": "94HCSKBB",
                "RetailPrice": 12.95,
                "ImageUrl": "http://www.motengna.com/2006060.jpg",
                "SupplierId": 1,
                "SupplierName": "Moteng",
                "ManufacturerId": 8664,
                "ManufacturerName": "Cold Steel",
                "CategoryId": 13384,
                "CategoryName": "Knives : Apparel"
            },
            {
                "Id": 374978,
                "SKU": "4008284",
                "Description": "The mummy style sleeping bag provides plenty of warmth in a realistic pack size. It has highly siliconized synthetic fibers that give it a soft touch and prolong lifespan. Temperature rating is: comfort 32 degrees/low 18 degrees. The Proforce Backpacker Mosquito Net can really make the difference on your next camping trip. Creeping critters can ruin your sleep and in some places-make you quite sick. The Proforce Backpacker Mosquito Net is a fine mesh single point mount mosquito net that is versatile and lightweight. The Backpacker Mosquito Net is perfect for ultra light campers or anyone concerned with critters in the night.",
                "Name": "Snugpak Backpacker Bundle-Mosquito Net & Sleeper Lite Olive",
                "ItemNumber": "BUN105",
                "RetailPrice": 72.11,
                "ImageUrl": "http://www.motengna.com/core/media/media.nl?id=2846887&c=902676&h=978afec2805b0a9ca839",
                "SupplierId": 1,
                "SupplierName": "Moteng",
                "ManufacturerId": 9048,
                "ManufacturerName": "Snugpak",
                "CategoryId": 13256,
                "CategoryName": "Camping : Accessories"
            },
            {
                "Id": 374979,
                "SKU": "4008286",
                "Description": "Olive Snugpak Poncho is over the head smock style coverall. Designed to be worn over personal equipment and backpack. Generously cut to allow use as an emergency bivvi. Has an adjustable hood and thumb loops with Velcro chest map pocket with storm flap. Fully tapped Paratex Dry shell is 100% waterproof and weighs 14 oz. One size fits most. The Jungle Bag is an ideal sleeping bag for tropical conditions. Snugpak has engineered the Jungle Bag with a specific weight of Travelsoft Insulation to maximize the efficiency and the needs of those individuals using it. Travelsoft Insulation was selected and chosen for its exceptional performance in hot and humid conditions. Also with its square foot design and zipper placement the Jungle bag can be opened out into a blanket for more versatility when traveling, or just as a barrier between you and what you are about to lay on. Another great feature of the Jungle Bag is its concealed roll away mosquito netting which can be zipped over the face sealing the Jungle Bag giving you protection against mosquitoes, snakes, etc. Store your sleeping bag, clothing, and any other items you want to keep dry in a Dri Sak. No matter what size you choose or need Snugpak has a size that is sure to be right for your situation. These Dri Sak's are seam taped nylon with a TPU film lamination to ensure protection if your gear takes an unexpected dive into the water. They are a great addition that can be used in conjunction with any of the Snugpak backpacks or any other backpacks. Snugpak Dri Sak bags are not intended to be submerged for extended periods of time. Roll top closure must be closed correctly. It is recommended rolling 3 times and buckle to keep contents dry. Contact with abrasive or sharp objects can damage and/or compromise the integrity and waterproofness.",
                "Name": "Snugpak Jungle Poncho-Jungle Bag-Dri-Sak Bundle - Olive",
                "ItemNumber": "BUN107",
                "RetailPrice": 98.42,
                "ImageUrl": "http://www.motengna.com/core/media/media.nl?id=2846889&c=902676&h=31602640a16b21cb884c",
                "SupplierId": 1,
                "SupplierName": "Moteng",
                "ManufacturerId": 9048,
                "ManufacturerName": "Snugpak",
                "CategoryId": 13256,
                "CategoryName": "Camping : Accessories"
            },
            {
                "Id": 374980,
                "SKU": "4008323",
                "Description": "The Bravo Echo surprises with its 10 cm long blade made from 440A steel, whose size is not necessarily apparent in the folded condition but features a full sized blade when deployed. The stable stainless grip is fabricated in a refined two-tone finish and a slim G10 scale is mounted for increased grippiness. Overall length 9 1/8\" Blade 4\" Thickness 3.4 mm. Weight 7 ozs.",
                "Name": "Magnum Bravo Echo Folding Knife 4\" Blade - 9 1/8\" Overall",
                "ItemNumber": "01EL635",
                "RetailPrice": 36.37,
                "ImageUrl": "http://www.motengna.com/core/media/media.nl?id=3191180&c=902676&h=56468d39df92e6eb7238",
                "SupplierId": 1,
                "SupplierName": "Moteng",
                "ManufacturerId": 8879,
                "ManufacturerName": "Magnum",
                "CategoryId": 13392,
                "CategoryName": "Knives : Folding Blade"
            },
            {
                "Id": 374981,
                "SKU": "4008333",
                "Description": "If there were such a thing as THE perfect day-to-day knife it might look like the Golf Tango. The corrosion-resistant 440A steel blade has a sand-colored coating and therefore provides extra corrosion resistance. The full tang construction gives the knife incredible strength without appearing brutish. The perforations in the grip keep the weight within reason. Green G-10 grip scales. The tang features two lanyard holes. Shipped with green kydex sheath and belt adapter. Overall 7 7/8\"  Blade 4 1/8\"  Thickness 5.3 mm. Weight 7.9 ozs.",
                "Name": "Magnum Golf Tango Fixed Knife 4 1/8\" Blade- 7 7/8\" Overall",
                "ItemNumber": "02SC647",
                "RetailPrice": 55.9,
                "ImageUrl": "http://www.motengna.com/core/media/media.nl?id=3191190&c=902676&h=e902a9377523a7821f58",
                "SupplierId": 1,
                "SupplierName": "Moteng",
                "ManufacturerId": 8879,
                "ManufacturerName": "Magnum",
                "CategoryId": 13391,
                "CategoryName": "Knives : Fixed Blade"
            },
            {
                "Id": 374982,
                "SKU": "4008353",
                "Description": "Mega-Manix has Spydercoâ€™s patented Ball Bearing Lock. Full internal handle liners extend beyond the G-10 handle scales and are scalloped around the perimeter providing exceptional grip and handle control.",
                "Name": "Spyderco Manix2 XL Black G-10 Plainedge Knife",
                "ItemNumber": "C95GP2",
                "RetailPrice": 146.93,
                "ImageUrl": "http://www.motengna.com/4008353_2.jpg",
                "SupplierId": 1,
                "SupplierName": "Moteng",
                "ManufacturerId": 9059,
                "ManufacturerName": "Spyderco",
                "CategoryId": 13392,
                "CategoryName": "Knives : Folding Blade"
            },
            {
                "Id": 374983,
                "SKU": "4008363",
                "Description": "Alaskan Series Cooler Panels freeze at 33.8 F and can efficiently keep food or drinks cold without risk of freezing and is reusable for years. The active ingredients are non-toxic, biodegradable and housed in a rugged container designed to provide maximum surface area to increase the efficiency at which they cool. Store in the freezer until needed and return to the freezer after use. Alaskan series cooler panels will freeze in 6-8 hours in any freezer. The cooler panels can be used in combination with ice to extend ice life up to 50%. Panels are top rack dishwasher safe. The ice size is small.",
                "Name": "Alaskan Series 33 Degree High Performance Cooler Pak-Ice Sm",
                "ItemNumber": "1200",
                "RetailPrice": 14.67,
                "ImageUrl": "http://www.motengna.com/core/media/media.nl?id=3132308&c=902676&h=145fea36f50094337c67",
                "SupplierId": 1,
                "SupplierName": "Moteng",
                "ManufacturerId": 8581,
                "ManufacturerName": "Arctic Ice, LLC",
                "CategoryId": 13262,
                "CategoryName": "Camping : Coolers"
            },
            {
                "Id": 374984,
                "SKU": "4008371",
                "Description": "Chillin Brew Cooler Panels were designed with the beer drinker in mind but are excellent for keeping anything in a cooler, several degrees colder than ice. This Chillin Brews freezing point of 28 degrees makes it uniquely suited for keeping beer or any other beverage at its coldest point possible. This panel is reusable for a lifetime, making it very economical choice for years of colder than ice coolers. Use Chiilin Brew Panels with ice to keep ice frozen up to 50% longer. Store the cooler panels in the freezer for convenience. The panels should freeze in about 6-8 hours. Top rack dishwasher safe. The ice size is small.",
                "Name": "Chillin Brew 28 Degree High Performance Cooler-Ice Size Sm",
                "ItemNumber": "1208",
                "RetailPrice": 15.13,
                "ImageUrl": "http://www.motengna.com/core/media/media.nl?id=3132316&c=902676&h=cef6ce81687ad426b4dd",
                "SupplierId": 1,
                "SupplierName": "Moteng",
                "ManufacturerId": 8581,
                "ManufacturerName": "Arctic Ice, LLC",
                "CategoryId": 13262,
                "CategoryName": "Camping : Coolers"
            },
            {
                "Id": 374985,
                "SKU": "4008275",
                "Description": "Introducing the worldâ€™s first full size lopper sheath with 5-in-1 carrying capacity to hold all your favorite EZ Kut tools! EZ Kut sling pak provides protection for your EZ Kut tools as well as functionality in the field, on the farm, or in your backyard. The innovative pull-thru strap and flex-formed opening makes access to your EZ Kut lopper quick and easy â€” just reach back and grab the big brother lopper and get kuttinâ€™! When you need your EZ Kut ratcheting pruner or folding hand saw just swing the sling pak around and grab â€˜em! Additional pockets are provided for your cell phone or hand held device and EZ Kut carbide sharpener as well. When youâ€™re finished just place it back in the sling and you'll always be ready for action. Guaranteed for life, itâ€™s the perfect complement to your EZ Kut tools!",
                "Name": "EZ KUT Sling Pack",
                "ItemNumber": "3110 SLP",
                "RetailPrice": 81.94,
                "ImageUrl": "http://www.motengna.com/core/media/media.nl?id=2753791&c=902676&h=8a25042ac8636e778548",
                "SupplierId": 1,
                "SupplierName": "Moteng",
                "ManufacturerId": 8728,
                "ManufacturerName": "EZ-Kut Products",
                "CategoryId": 13463,
                "CategoryName": "Tools : Gloves"
            },
            {
                "Id": 374986,
                "SKU": "4008306",
                "Description": "This medium size range bag is perfect for the handgun or long gun shooter. The visual I.D. storage system helps the shooter quickly access shooting glasses, ear plugs, ear muffs, extra magazines, binoculars, shooting targets, tools, ammo dump cups (2), stapler, tape or cleaning supplies. Lift ports are on each end of the bag for easy maneuvering with 2 hands. The bag features padded walls and bottom to protect firearms and ammo while traveling to and from the range. This bag features metal reinforced hardware on the shoulder strap for durability and hands free transportation. Large loop zipper pulls allow for a lock to be added to secure all areas for legal transport.",
                "Name": "G.P.S. Medium Range Bag Tan",
                "ItemNumber": "GPS-1411MRBT",
                "RetailPrice": 78.86,
                "ImageUrl": "http://www.motengna.com/core/media/media.nl?id=2935407&c=902676&h=2def9c87f515cb888d10",
                "SupplierId": 1,
                "SupplierName": "Moteng",
                "ManufacturerId": 8760,
                "ManufacturerName": "G Outdoors",
                "CategoryId": 13444,
                "CategoryName": "Shooting : Accessories"
            },
            {
                "Id": 374987,
                "SKU": "4008307",
                "Description": "The Quad Pistol Case was designed to carry up to  4 pistols in a thick tricot quilted lining. The 2 side pockets are designed to open and lay flat allowing for organized space at the range. In one side pocket is a visual I.D. storage system that helps the shooter quickly identify and access shooting glasses, ear plugs, tools and an ammo dump cup. The other side pocket is designed to store a can of break free, additional magazines and has a triple elastic for a cleaning rod or other accessories. Large loop zipper pulls allow for a lock to be added to secure all areas for legal transport.",
                "Name": "G.P.S. Quad Pistol Case in Tan",
                "ItemNumber": "GPS-1310PCT",
                "RetailPrice": 47.39,
                "ImageUrl": "http://www.motengna.com/core/media/media.nl?id=2935408&c=902676&h=43a0de554bbe3934bf75",
                "SupplierId": 1,
                "SupplierName": "Moteng",
                "ManufacturerId": 8760,
                "ManufacturerName": "G Outdoors",
                "CategoryId": 13444,
                "CategoryName": "Shooting : Accessories"
            },
            {
                "Id": 374988,
                "SKU": "4008347",
                "Description": "Twenty-two (22) multi-drawer design for storing a wide variety of parts and supplies. Clear see-through drawers provide quick identification of each drawers contents. Supports on the cabinet frame provide added strength and improve drawer action. Large, ribbed drawer pulls make it easy to access contents. Built-in stop tabs prevent drawers from pulling out all the way. Easily mounts on wall or stands on bench or counter top. Drawer dividers available to create additional storage. Dimensions: 19\"W x 6\"D x 9\"H.",
                "Name": "Stack-On 22 Drawer Storage Cabinet",
                "ItemNumber": "DS-22",
                "RetailPrice": 22.23,
                "ImageUrl": "http://www.motengna.com/core/media/media.nl?id=3411384&c=902676&h=a7e909e185c399f142b4",
                "SupplierId": 1,
                "SupplierName": "Moteng",
                "ManufacturerId": 9064,
                "ManufacturerName": "Stack-On",
                "CategoryId": 13468,
                "CategoryName": "Tools : Tool Boxes"
            },
            {
                "Id": 374989,
                "SKU": "4008348",
                "Description": "Twenty-seven (27) multi-drawer bin contains 23 medium drawers and 4 large drawers. Contemporary heavy duty cabinet design with wide frame for additional strength and rigidity. Drawer stop tabs prevent spills. Horizontal and vertical supports are made extra strong to increase cabinet strength and improve drawer action. Large, ribbed drawers. 12 5/8'' W x 13 3/8'' H x 6 3/8'' D (32cm x 34cm x 16cm).",
                "Name": "Stack-On 27 Bin Plastic Drawer Cabinet",
                "ItemNumber": "DS-27",
                "RetailPrice": 21.1,
                "ImageUrl": "http://www.motengna.com/core/media/media.nl?id=3411383&c=902676&h=7e9071039183a300dad7",
                "SupplierId": 1,
                "SupplierName": "Moteng",
                "ManufacturerId": 9064,
                "ManufacturerName": "Stack-On",
                "CategoryId": 13468,
                "CategoryName": "Tools : Tool Boxes"
            },
            {
                "Id": 374990,
                "SKU": "4008373",
                "Description": "Chillin Brew Cooler Panels were designed with the beer drinker in mind but are excellent for keeping anything in a cooler, several degrees colder than ice. This Chillin Brews freezing point of 28 degrees makes it uniquely suited for keeping beer or any other beverage at its coldest point possible. This panel is reusable for a lifetime, making it very economical choice for years of colder than ice coolers. Use Chiilin Brew Panels with ice to keep ice frozen up to 50% longer. Store the cooler panels in the freezer for convenience. The panels should freeze in about 6-8 hours. Top rack dishwasher safe. The ice size is large.",
                "Name": "Chillin Brew 28 Degree High Performance Cooler-Ice Size Lrg",
                "ItemNumber": "1210",
                "RetailPrice": 19.92,
                "ImageUrl": "http://www.motengna.com/core/media/media.nl?id=3132318&c=902676&h=463ad5fccb9bb3c7d545",
                "SupplierId": 1,
                "SupplierName": "Moteng",
                "ManufacturerId": 8581,
                "ManufacturerName": "Arctic Ice, LLC",
                "CategoryId": 13262,
                "CategoryName": "Camping : Coolers"
            },
            {
                "Id": 374991,
                "SKU": "4008376",
                "Description": "Chillin' Brew offers the beer drinker, the absolutely best opportunity for the coldest beer possible!  Arctic Ice Chillin' Brew Panel in collegiate color orange, in a cooler can keep beer at the perfect drinking temperature longer than ice without the mess or waste. Inside Chillin' Brew panel, the active ingredient changes phases, or freezes at a temperature just above the temperature beer would freeze. This material manipulates the temperature of beer to constantly remain even colder than ice. In fact, Chillin' Brew panel could possibly produce the coldest beer in the entire world! As an added bonus - Chillin' Brew is reusable for a lifetime! To recharge the panels, just pop them in the freezer for 6-10 hours and Chillin' Brew's ready to party! Chillin' Brews active ingredient has been tested for up to 100,000 freeze/thaw cycles without any change in its effectiveness. In addition to being the best way to keep beer at a \"beer cave\" temperature, Chillin' Brew is environmentally friendly. The unique phase change material used in Chillin' Brew is made from animal food stocks and is completely biodegradable and harmless should it ever leak.",
                "Name": "Chillin Brew 28 Degree Collegiate Orange Ice Panel-XL",
                "ItemNumber": "1213",
                "RetailPrice": 27.64,
                "ImageUrl": "http://www.motengna.com/core/media/media.nl?id=3132321&c=902676&h=75ccb3d794773b4df12a",
                "SupplierId": 1,
                "SupplierName": "Moteng",
                "ManufacturerId": 8581,
                "ManufacturerName": "Arctic Ice, LLC",
                "CategoryId": 13262,
                "CategoryName": "Camping : Coolers"
            },
            {
                "Id": 374972,
                "SKU": "4008304",
                "Description": "This â€œfree standingâ€ backpack allows for hands free transportation to and from the range. The â€œHandgunner Backpackâ€ was designed to allow the avid handgun shooter a way to transport their handguns, 12 extra magazines, ammo, shooting glasses, ear protection, targets, stapler, tape, binos, shooting mats, cleaning supplies all in a compact backpack. By utilizing the visual ID storage system G.P.S. has designed separate pockets that store your most frequently used items for added protection and easy retrieval. The most unique feature is the inside storage cradle that slides in and out of the lower compartment. This foam cradle was designed to hold 4 medium to small size handguns in a vertical format. This vertical format allows for ease of use at the range and added protection from 360 degrees. This Cradle is made of high density foam and is cut with a CNC machine to cradle each pistol by its trigger guard. Just slide out the cradle at the range and keep all 4 pistols organized. After shooting, remove the cradle with the handguns inside for cleaning and then for storage in your gun safe. No need to open and close pistol cases or rugs each time you intend to use. The â€œHandgunnerâ€ backpack also features a waterproof pull out cover to help keep the contents dry in case of a sudden downpour.",
                "Name": "G.P.S. Handgunner Backpack Tan",
                "ItemNumber": "GPS-1711BPT",
                "RetailPrice": 124.25,
                "ImageUrl": "http://www.motengna.com/core/media/media.nl?id=2935413&c=902676&h=7b517345f374c68c8d41",
                "SupplierId": 1,
                "SupplierName": "Moteng",
                "ManufacturerId": 8760,
                "ManufacturerName": "G Outdoors",
                "CategoryId": 13444,
                "CategoryName": "Shooting : Accessories"
            },
            {
                "Id": 374973,
                "SKU": "4008319",
                "Description": "The original model of the Urban Trapper from Brad Zinker has quickly developed into one of the most popular gentleman's knives from BÃ¶ker Plus. The extremely low-profile and slender design in combination with refined materials such as VG-10, titanium and an IKBS hinge result in an incomparable pocketknife for demanding tastes. This version offers additional scales on the titanium handle, which provide a slightly fuller grip feel in addition to a special visual appeal. Overall 7 2/3\". Blade 3 3/7\". Weight approx. 1.8 oz.",
                "Name": "Boker Plus Urban Trapper 3 1/2\" Blade w/G-10 Handle",
                "ItemNumber": "01BO732",
                "RetailPrice": 83.71,
                "ImageUrl": "http://www.motengna.com/core/media/media.nl?id=3191198&c=902676&h=c007f8d766118c333b19",
                "SupplierId": 1,
                "SupplierName": "Moteng",
                "ManufacturerId": 8622,
                "ManufacturerName": "Boker Plus",
                "CategoryId": 13392,
                "CategoryName": "Knives : Folding Blade"
            },
            {
                "Id": 374974,
                "SKU": "4008368",
                "Description": "Tundra Series Freezer Panels have a very unique freezing point of 5 degrees F and are designed to help maintain a consistent freezer temperature in coolers. While not as cold as dry ice, Tundra freezer panels can be used as a suitable replacement. The panels have been shown to maintain days of frozen temperatures in controlled testing. Due to its low freezing point, Tundra freezer panels can take 18-24 hours to freeze. Turn freezer to the lowest setting to ensure freezing. It is recommended that these panels be used to maintain frozen goods. Use weight equivalent to dry ice needed for great reusable results. Store in freezer when not using so they are ready when needed. The ice size is medium.",
                "Name": "Tundra Series 5 Degree High Performance Cooler Pak-Ice Med",
                "ItemNumber": "1203",
                "RetailPrice": 17.82,
                "ImageUrl": "http://www.motengna.com/core/media/media.nl?id=3132313&c=902676&h=76d9215daedefbe5a415",
                "SupplierId": 1,
                "SupplierName": "Moteng",
                "ManufacturerId": 8581,
                "ManufacturerName": "Arctic Ice, LLC",
                "CategoryId": 13262,
                "CategoryName": "Camping : Coolers"
            },
            {
                "Id": 374975,
                "SKU": "4008375",
                "Description": "Chillin' Brew offers the beer drinker, the absolutely best opportunity for the coldest beer possible!  Arctic Ice Chillin' Brew Panel in collegiate color royal blue, in a cooler can keep beer at the perfect drinking temperature longer than ice without the mess or waste. Inside Chillin' Brew panel, the active ingredient changes phases, or freezes at a temperature just above the temperature beer would freeze. This material manipulates the temperature of beer to constantly remain even colder than ice. In fact, Chillin' Brew panel could possibly produce the coldest beer in the entire world! As an added bonus - Chillin' Brew is reusable for a lifetime! To recharge the panels, just pop them in the freezer for 6-10 hours and Chillin' Brew's ready to party! Chillin' Brews active ingredient has been tested for up to 100,000 freeze/thaw cycles without any change in its effectiveness. In addition to being the best way to keep beer at a \"beer cave\" temperature, Chillin' Brew is environmentally friendly. The unique phase change material used in Chillin' Brew is made from animal food stocks and is completely biodegradable and harmless should it ever leak.",
                "Name": "Chillin Brew 28 Degree Collegiate Royal Blue Ice Panel-XL",
                "ItemNumber": "1212",
                "RetailPrice": 27.64,
                "ImageUrl": "http://www.motengna.com/core/media/media.nl?id=3132320&c=902676&h=de10119bd9341058bac7",
                "SupplierId": 1,
                "SupplierName": "Moteng",
                "ManufacturerId": 8581,
                "ManufacturerName": "Arctic Ice, LLC",
                "CategoryId": 13262,
                "CategoryName": "Camping : Coolers"
            },
            {
                "Id": 374976,
                "SKU": "4008378",
                "Description": "Chillin' Brew offers the beer drinker, the absolutely best opportunity for the coldest beer possible!  Arctic Ice Chillin' Brew Panel in collegiate color red, in a cooler can keep beer at the perfect drinking temperature longer than ice without the mess or waste. Inside Chillin' Brew panel, the active ingredient changes phases, or freezes at a temperature just above the temperature beer would freeze. This material manipulates the temperature of beer to constantly remain even colder than ice. In fact, Chillin' Brew panel could possibly produce the coldest beer in the entire world! As an added bonus - Chillin' Brew is reusable for a lifetime! To recharge the panels, just pop them in the freezer for 6-10 hours and Chillin' Brew's ready to party! Chillin' Brews active ingredient has been tested for up to 100,000 freeze/thaw cycles without any change in its effectiveness. In addition to being the best way to keep beer at a \"beer cave\" temperature, Chillin' Brew is environmentally friendly. The unique phase change material used in Chillin' Brew is made from animal food stocks and is completely biodegradable and harmless should it ever leak.",
                "Name": "Chillin Brew 28 Degree Collegiate Red Ice Panel-XL",
                "ItemNumber": "1215",
                "RetailPrice": 27.64,
                "ImageUrl": "http://www.motengna.com/core/media/media.nl?id=3132323&c=902676&h=ad2a1ed470aec30e57a4",
                "SupplierId": 1,
                "SupplierName": "Moteng",
                "ManufacturerId": 8581,
                "ManufacturerName": "Arctic Ice, LLC",
                "CategoryId": 13262,
                "CategoryName": "Camping : Coolers"
            },
            {
                "Id": 374977,
                "SKU": "2006060",
                "Description": "100% Acrylic knit cap. The front features the Kanji characters meaning Master Bladesmith and the words Cold Steel Knives on the back. Available in black or gray.",
                "Name": "Cold Steel Knit Cap 94HCSKBB",
                "ItemNumber": "94HCSKBB",
                "RetailPrice": 12.95,
                "ImageUrl": "http://www.motengna.com/2006060.jpg",
                "SupplierId": 1,
                "SupplierName": "Moteng",
                "ManufacturerId": 8664,
                "ManufacturerName": "Cold Steel",
                "CategoryId": 13384,
                "CategoryName": "Knives : Apparel"
            },
            {
                "Id": 374978,
                "SKU": "4008284",
                "Description": "The mummy style sleeping bag provides plenty of warmth in a realistic pack size. It has highly siliconized synthetic fibers that give it a soft touch and prolong lifespan. Temperature rating is: comfort 32 degrees/low 18 degrees. The Proforce Backpacker Mosquito Net can really make the difference on your next camping trip. Creeping critters can ruin your sleep and in some places-make you quite sick. The Proforce Backpacker Mosquito Net is a fine mesh single point mount mosquito net that is versatile and lightweight. The Backpacker Mosquito Net is perfect for ultra light campers or anyone concerned with critters in the night.",
                "Name": "Snugpak Backpacker Bundle-Mosquito Net & Sleeper Lite Olive",
                "ItemNumber": "BUN105",
                "RetailPrice": 72.11,
                "ImageUrl": "http://www.motengna.com/core/media/media.nl?id=2846887&c=902676&h=978afec2805b0a9ca839",
                "SupplierId": 1,
                "SupplierName": "Moteng",
                "ManufacturerId": 9048,
                "ManufacturerName": "Snugpak",
                "CategoryId": 13256,
                "CategoryName": "Camping : Accessories"
            },
            {
                "Id": 374979,
                "SKU": "4008286",
                "Description": "Olive Snugpak Poncho is over the head smock style coverall. Designed to be worn over personal equipment and backpack. Generously cut to allow use as an emergency bivvi. Has an adjustable hood and thumb loops with Velcro chest map pocket with storm flap. Fully tapped Paratex Dry shell is 100% waterproof and weighs 14 oz. One size fits most. The Jungle Bag is an ideal sleeping bag for tropical conditions. Snugpak has engineered the Jungle Bag with a specific weight of Travelsoft Insulation to maximize the efficiency and the needs of those individuals using it. Travelsoft Insulation was selected and chosen for its exceptional performance in hot and humid conditions. Also with its square foot design and zipper placement the Jungle bag can be opened out into a blanket for more versatility when traveling, or just as a barrier between you and what you are about to lay on. Another great feature of the Jungle Bag is its concealed roll away mosquito netting which can be zipped over the face sealing the Jungle Bag giving you protection against mosquitoes, snakes, etc. Store your sleeping bag, clothing, and any other items you want to keep dry in a Dri Sak. No matter what size you choose or need Snugpak has a size that is sure to be right for your situation. These Dri Sak's are seam taped nylon with a TPU film lamination to ensure protection if your gear takes an unexpected dive into the water. They are a great addition that can be used in conjunction with any of the Snugpak backpacks or any other backpacks. Snugpak Dri Sak bags are not intended to be submerged for extended periods of time. Roll top closure must be closed correctly. It is recommended rolling 3 times and buckle to keep contents dry. Contact with abrasive or sharp objects can damage and/or compromise the integrity and waterproofness.",
                "Name": "Snugpak Jungle Poncho-Jungle Bag-Dri-Sak Bundle - Olive",
                "ItemNumber": "BUN107",
                "RetailPrice": 98.42,
                "ImageUrl": "http://www.motengna.com/core/media/media.nl?id=2846889&c=902676&h=31602640a16b21cb884c",
                "SupplierId": 1,
                "SupplierName": "Moteng",
                "ManufacturerId": 9048,
                "ManufacturerName": "Snugpak",
                "CategoryId": 13256,
                "CategoryName": "Camping : Accessories"
            },
            {
                "Id": 374980,
                "SKU": "4008323",
                "Description": "The Bravo Echo surprises with its 10 cm long blade made from 440A steel, whose size is not necessarily apparent in the folded condition but features a full sized blade when deployed. The stable stainless grip is fabricated in a refined two-tone finish and a slim G10 scale is mounted for increased grippiness. Overall length 9 1/8\" Blade 4\" Thickness 3.4 mm. Weight 7 ozs.",
                "Name": "Magnum Bravo Echo Folding Knife 4\" Blade - 9 1/8\" Overall",
                "ItemNumber": "01EL635",
                "RetailPrice": 36.37,
                "ImageUrl": "http://www.motengna.com/core/media/media.nl?id=3191180&c=902676&h=56468d39df92e6eb7238",
                "SupplierId": 1,
                "SupplierName": "Moteng",
                "ManufacturerId": 8879,
                "ManufacturerName": "Magnum",
                "CategoryId": 13392,
                "CategoryName": "Knives : Folding Blade"
            },
            {
                "Id": 374981,
                "SKU": "4008333",
                "Description": "If there were such a thing as THE perfect day-to-day knife it might look like the Golf Tango. The corrosion-resistant 440A steel blade has a sand-colored coating and therefore provides extra corrosion resistance. The full tang construction gives the knife incredible strength without appearing brutish. The perforations in the grip keep the weight within reason. Green G-10 grip scales. The tang features two lanyard holes. Shipped with green kydex sheath and belt adapter. Overall 7 7/8\"  Blade 4 1/8\"  Thickness 5.3 mm. Weight 7.9 ozs.",
                "Name": "Magnum Golf Tango Fixed Knife 4 1/8\" Blade- 7 7/8\" Overall",
                "ItemNumber": "02SC647",
                "RetailPrice": 55.9,
                "ImageUrl": "http://www.motengna.com/core/media/media.nl?id=3191190&c=902676&h=e902a9377523a7821f58",
                "SupplierId": 1,
                "SupplierName": "Moteng",
                "ManufacturerId": 8879,
                "ManufacturerName": "Magnum",
                "CategoryId": 13391,
                "CategoryName": "Knives : Fixed Blade"
            },
            {
                "Id": 374982,
                "SKU": "4008353",
                "Description": "Mega-Manix has Spydercoâ€™s patented Ball Bearing Lock. Full internal handle liners extend beyond the G-10 handle scales and are scalloped around the perimeter providing exceptional grip and handle control.",
                "Name": "Spyderco Manix2 XL Black G-10 Plainedge Knife",
                "ItemNumber": "C95GP2",
                "RetailPrice": 146.93,
                "ImageUrl": "http://www.motengna.com/4008353_2.jpg",
                "SupplierId": 1,
                "SupplierName": "Moteng",
                "ManufacturerId": 9059,
                "ManufacturerName": "Spyderco",
                "CategoryId": 13392,
                "CategoryName": "Knives : Folding Blade"
            },
            {
                "Id": 374983,
                "SKU": "4008363",
                "Description": "Alaskan Series Cooler Panels freeze at 33.8 F and can efficiently keep food or drinks cold without risk of freezing and is reusable for years. The active ingredients are non-toxic, biodegradable and housed in a rugged container designed to provide maximum surface area to increase the efficiency at which they cool. Store in the freezer until needed and return to the freezer after use. Alaskan series cooler panels will freeze in 6-8 hours in any freezer. The cooler panels can be used in combination with ice to extend ice life up to 50%. Panels are top rack dishwasher safe. The ice size is small.",
                "Name": "Alaskan Series 33 Degree High Performance Cooler Pak-Ice Sm",
                "ItemNumber": "1200",
                "RetailPrice": 14.67,
                "ImageUrl": "http://www.motengna.com/core/media/media.nl?id=3132308&c=902676&h=145fea36f50094337c67",
                "SupplierId": 1,
                "SupplierName": "Moteng",
                "ManufacturerId": 8581,
                "ManufacturerName": "Arctic Ice, LLC",
                "CategoryId": 13262,
                "CategoryName": "Camping : Coolers"
            },
            {
                "Id": 374984,
                "SKU": "4008371",
                "Description": "Chillin Brew Cooler Panels were designed with the beer drinker in mind but are excellent for keeping anything in a cooler, several degrees colder than ice. This Chillin Brews freezing point of 28 degrees makes it uniquely suited for keeping beer or any other beverage at its coldest point possible. This panel is reusable for a lifetime, making it very economical choice for years of colder than ice coolers. Use Chiilin Brew Panels with ice to keep ice frozen up to 50% longer. Store the cooler panels in the freezer for convenience. The panels should freeze in about 6-8 hours. Top rack dishwasher safe. The ice size is small.",
                "Name": "Chillin Brew 28 Degree High Performance Cooler-Ice Size Sm",
                "ItemNumber": "1208",
                "RetailPrice": 15.13,
                "ImageUrl": "http://www.motengna.com/core/media/media.nl?id=3132316&c=902676&h=cef6ce81687ad426b4dd",
                "SupplierId": 1,
                "SupplierName": "Moteng",
                "ManufacturerId": 8581,
                "ManufacturerName": "Arctic Ice, LLC",
                "CategoryId": 13262,
                "CategoryName": "Camping : Coolers"
            },
            {
                "Id": 374985,
                "SKU": "4008275",
                "Description": "Introducing the worldâ€™s first full size lopper sheath with 5-in-1 carrying capacity to hold all your favorite EZ Kut tools! EZ Kut sling pak provides protection for your EZ Kut tools as well as functionality in the field, on the farm, or in your backyard. The innovative pull-thru strap and flex-formed opening makes access to your EZ Kut lopper quick and easy â€” just reach back and grab the big brother lopper and get kuttinâ€™! When you need your EZ Kut ratcheting pruner or folding hand saw just swing the sling pak around and grab â€˜em! Additional pockets are provided for your cell phone or hand held device and EZ Kut carbide sharpener as well. When youâ€™re finished just place it back in the sling and you'll always be ready for action. Guaranteed for life, itâ€™s the perfect complement to your EZ Kut tools!",
                "Name": "EZ KUT Sling Pack",
                "ItemNumber": "3110 SLP",
                "RetailPrice": 81.94,
                "ImageUrl": "http://www.motengna.com/core/media/media.nl?id=2753791&c=902676&h=8a25042ac8636e778548",
                "SupplierId": 1,
                "SupplierName": "Moteng",
                "ManufacturerId": 8728,
                "ManufacturerName": "EZ-Kut Products",
                "CategoryId": 13463,
                "CategoryName": "Tools : Gloves"
            },
            {
                "Id": 374986,
                "SKU": "4008306",
                "Description": "This medium size range bag is perfect for the handgun or long gun shooter. The visual I.D. storage system helps the shooter quickly access shooting glasses, ear plugs, ear muffs, extra magazines, binoculars, shooting targets, tools, ammo dump cups (2), stapler, tape or cleaning supplies. Lift ports are on each end of the bag for easy maneuvering with 2 hands. The bag features padded walls and bottom to protect firearms and ammo while traveling to and from the range. This bag features metal reinforced hardware on the shoulder strap for durability and hands free transportation. Large loop zipper pulls allow for a lock to be added to secure all areas for legal transport.",
                "Name": "G.P.S. Medium Range Bag Tan",
                "ItemNumber": "GPS-1411MRBT",
                "RetailPrice": 78.86,
                "ImageUrl": "http://www.motengna.com/core/media/media.nl?id=2935407&c=902676&h=2def9c87f515cb888d10",
                "SupplierId": 1,
                "SupplierName": "Moteng",
                "ManufacturerId": 8760,
                "ManufacturerName": "G Outdoors",
                "CategoryId": 13444,
                "CategoryName": "Shooting : Accessories"
            },
            {
                "Id": 374987,
                "SKU": "4008307",
                "Description": "The Quad Pistol Case was designed to carry up to  4 pistols in a thick tricot quilted lining. The 2 side pockets are designed to open and lay flat allowing for organized space at the range. In one side pocket is a visual I.D. storage system that helps the shooter quickly identify and access shooting glasses, ear plugs, tools and an ammo dump cup. The other side pocket is designed to store a can of break free, additional magazines and has a triple elastic for a cleaning rod or other accessories. Large loop zipper pulls allow for a lock to be added to secure all areas for legal transport.",
                "Name": "G.P.S. Quad Pistol Case in Tan",
                "ItemNumber": "GPS-1310PCT",
                "RetailPrice": 47.39,
                "ImageUrl": "http://www.motengna.com/core/media/media.nl?id=2935408&c=902676&h=43a0de554bbe3934bf75",
                "SupplierId": 1,
                "SupplierName": "Moteng",
                "ManufacturerId": 8760,
                "ManufacturerName": "G Outdoors",
                "CategoryId": 13444,
                "CategoryName": "Shooting : Accessories"
            },
            {
                "Id": 374988,
                "SKU": "4008347",
                "Description": "Twenty-two (22) multi-drawer design for storing a wide variety of parts and supplies. Clear see-through drawers provide quick identification of each drawers contents. Supports on the cabinet frame provide added strength and improve drawer action. Large, ribbed drawer pulls make it easy to access contents. Built-in stop tabs prevent drawers from pulling out all the way. Easily mounts on wall or stands on bench or counter top. Drawer dividers available to create additional storage. Dimensions: 19\"W x 6\"D x 9\"H.",
                "Name": "Stack-On 22 Drawer Storage Cabinet",
                "ItemNumber": "DS-22",
                "RetailPrice": 22.23,
                "ImageUrl": "http://www.motengna.com/core/media/media.nl?id=3411384&c=902676&h=a7e909e185c399f142b4",
                "SupplierId": 1,
                "SupplierName": "Moteng",
                "ManufacturerId": 9064,
                "ManufacturerName": "Stack-On",
                "CategoryId": 13468,
                "CategoryName": "Tools : Tool Boxes"
            },
            {
                "Id": 374989,
                "SKU": "4008348",
                "Description": "Twenty-seven (27) multi-drawer bin contains 23 medium drawers and 4 large drawers. Contemporary heavy duty cabinet design with wide frame for additional strength and rigidity. Drawer stop tabs prevent spills. Horizontal and vertical supports are made extra strong to increase cabinet strength and improve drawer action. Large, ribbed drawers. 12 5/8'' W x 13 3/8'' H x 6 3/8'' D (32cm x 34cm x 16cm).",
                "Name": "Stack-On 27 Bin Plastic Drawer Cabinet",
                "ItemNumber": "DS-27",
                "RetailPrice": 21.1,
                "ImageUrl": "http://www.motengna.com/core/media/media.nl?id=3411383&c=902676&h=7e9071039183a300dad7",
                "SupplierId": 1,
                "SupplierName": "Moteng",
                "ManufacturerId": 9064,
                "ManufacturerName": "Stack-On",
                "CategoryId": 13468,
                "CategoryName": "Tools : Tool Boxes"
            },
            {
                "Id": 374990,
                "SKU": "4008373",
                "Description": "Chillin Brew Cooler Panels were designed with the beer drinker in mind but are excellent for keeping anything in a cooler, several degrees colder than ice. This Chillin Brews freezing point of 28 degrees makes it uniquely suited for keeping beer or any other beverage at its coldest point possible. This panel is reusable for a lifetime, making it very economical choice for years of colder than ice coolers. Use Chiilin Brew Panels with ice to keep ice frozen up to 50% longer. Store the cooler panels in the freezer for convenience. The panels should freeze in about 6-8 hours. Top rack dishwasher safe. The ice size is large.",
                "Name": "Chillin Brew 28 Degree High Performance Cooler-Ice Size Lrg",
                "ItemNumber": "1210",
                "RetailPrice": 19.92,
                "ImageUrl": "http://www.motengna.com/core/media/media.nl?id=3132318&c=902676&h=463ad5fccb9bb3c7d545",
                "SupplierId": 1,
                "SupplierName": "Moteng",
                "ManufacturerId": 8581,
                "ManufacturerName": "Arctic Ice, LLC",
                "CategoryId": 13262,
                "CategoryName": "Camping : Coolers"
            },
            {
                "Id": 374991,
                "SKU": "4008376",
                "Description": "Chillin' Brew offers the beer drinker, the absolutely best opportunity for the coldest beer possible!  Arctic Ice Chillin' Brew Panel in collegiate color orange, in a cooler can keep beer at the perfect drinking temperature longer than ice without the mess or waste. Inside Chillin' Brew panel, the active ingredient changes phases, or freezes at a temperature just above the temperature beer would freeze. This material manipulates the temperature of beer to constantly remain even colder than ice. In fact, Chillin' Brew panel could possibly produce the coldest beer in the entire world! As an added bonus - Chillin' Brew is reusable for a lifetime! To recharge the panels, just pop them in the freezer for 6-10 hours and Chillin' Brew's ready to party! Chillin' Brews active ingredient has been tested for up to 100,000 freeze/thaw cycles without any change in its effectiveness. In addition to being the best way to keep beer at a \"beer cave\" temperature, Chillin' Brew is environmentally friendly. The unique phase change material used in Chillin' Brew is made from animal food stocks and is completely biodegradable and harmless should it ever leak.",
                "Name": "Chillin Brew 28 Degree Collegiate Orange Ice Panel-XL",
                "ItemNumber": "1213",
                "RetailPrice": 27.64,
                "ImageUrl": "http://www.motengna.com/core/media/media.nl?id=3132321&c=902676&h=75ccb3d794773b4df12a",
                "SupplierId": 1,
                "SupplierName": "Moteng",
                "ManufacturerId": 8581,
                "ManufacturerName": "Arctic Ice, LLC",
                "CategoryId": 13262,
                "CategoryName": "Camping : Coolers"
            }
        ];
        return { brands: brands, categories: categories, prices: prices, products: products, slideshowImages: slideshowImages };
    };
    return MockDataService;
}());
exports.MockDataService = MockDataService;
//# sourceMappingURL=mock-data.js.map