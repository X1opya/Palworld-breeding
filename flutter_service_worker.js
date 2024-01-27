'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "1b8c1003aa723f6b2cbb602c77653d3a",
"index.html": "4e13bb4d0764d5c168ce018585ae79b7",
"/": "4e13bb4d0764d5c168ce018585ae79b7",
"main.dart.js": "f9f82068406bd49358bde120644d8803",
"flutter.js": "7d69e653079438abfbb24b82a655b0a4",
"favicon.png": "f461ff344e7b3eec08ab48777ee7ba77",
"icons/icon-192.png": "adbc32f6657b4a7b49bbb7c17d3ac440",
"icons/Icon-maskable-192.png": "adbc32f6657b4a7b49bbb7c17d3ac440",
"icons/Icon-maskable-512.png": "d52b2fea916bb0356dab46c3e865e2c2",
"icons/icon-512.png": "d52b2fea916bb0356dab46c3e865e2c2",
"manifest.json": "515ca6d0ff64f1d1781fa426b76e9635",
"assets/images/Ribbuny.png": "faf3655257ccb166df07d4a3121d56bd",
"assets/images/Woolipop.png": "640a4406a59cc7d0a1fc1f9ed993a7e0",
"assets/images/Swee.png": "d0fe3dbd620be54cc10c07222a4afc62",
"assets/images/Blazamut.png": "f7926fed34a5f9fb497f0946a3d6b714",
"assets/images/Chikipi.png": "6097222dad92ba70671c4e6329f3fe62",
"assets/images/Cremis.png": "912af5c999ae61cec45f06a25170ea9f",
"assets/images/Bushi.png": "511312b61d93c60d20aa630cac09b7a1",
"assets/images/Mossanda.png": "5b2f10ffaba9df159e1615b344ffa134",
"assets/images/Quivern.png": "471c4339c49862f33ffdecd7167b932d",
"assets/images/Katress.png": "badcb9814c4c27d4914d21e235db5453",
"assets/images/Univolt.png": "6a281eb4ed5cdbee19f22cdade8d839c",
"assets/images/Tanzee.png": "3b2502cf8d69ae8fedd0f31a50157aa4",
"assets/images/Nox.png": "d4e3dab3700fb2e51cef5c5aeab7419d",
"assets/images/Jolthog.png": "aeaa1f66e8737d02bdbda49d087ec262",
"assets/images/Depresso.png": "bb756fdb6489248559b56988f7109af7",
"assets/images/Lyleen%20Noct.png": "8b5a019a2a77e8ce4e4b0eb471c7badc",
"assets/images/Kelpsea%20Ignis.png": "d34f39af6378f8f0d71b473a5a3e5c13",
"assets/images/Blazehowl%20Noct.png": "7c39570c36552c036cb2de47356d72b3",
"assets/images/Warsect.png": "38a458389a1f16cb1d5c11426fd18b03",
"assets/images/Foxparks.png": "86fc0d1a5838fa19cbd33aeb8e7f9038",
"assets/images/Helzephyr.png": "cfb28e2fd3bec7f182f3a0cd3de9f6d9",
"assets/images/Vanwyrm.png": "c32863267c66c5bfb558c67666877383",
"assets/images/Hangyu.png": "6c95273e5b6aebf010f11242cb5b4978",
"assets/images/Broncherry.png": "a40ed5ccd24cb28c5fc37c13d88ad4dc",
"assets/images/Surfent.png": "2a0efd2db89c258338ea129b5b557210",
"assets/images/Teafant.png": "fa4717a5bc689ff21c5324c227192881",
"assets/images/Fuack.png": "b69aa18ac598dc8b71cffd3d9afa6519",
"assets/images/Pyrin%20Noct.png": "f7a9e078a9bac18700837dcfdcedaa8b",
"assets/images/Mau%20Cryst.png": "b3bd30b301a5a950f272eaac3928c939",
"assets/images/Lunaris.png": "6e933edb263176d1c6deeb8ae591f417",
"assets/images/Leezpunk.png": "5f73df71661c21a20c94889f15caaa04",
"assets/images/Maraith.png": "4bc5182a2a12aa251848e51bda62c917",
"assets/images/Gorirat.png": "16e917a6543ceb96d5b58e8b2d8c2e7b",
"assets/images/Broncherry%20Aqua.png": "d40f67e961049cd0f61129c80a2f5fea",
"assets/images/Lyleen.png": "ef5d786515c306b98c7601c6d91a87c3",
"assets/images/Lamball.png": "04486e93e05b8067b5994204a734f5f4",
"assets/images/Cryolinx.png": "98f0ea60cd6f3a6141ffe2ea4ba219b9",
"assets/images/Kelpsea.png": "770219bdfefddcb6742a5a0151246e2a",
"assets/images/Relaxaurus.png": "06f67a430dee071d22cc534cef3d6bc3",
"assets/images/Galeclaw.png": "4074c3f81a5612393402b5b1701bb261",
"assets/images/Penking.png": "00bf7597ab12e6ca0b8ed6e63f21d921",
"assets/images/Shadowbeak.png": "84bd30136e484fe821bfeed020e1798a",
"assets/images/Reindrix.png": "0a4b5157898c664cb67e9f2bb0d95573",
"assets/images/Felbat.png": "eeff080bc78e63ed5bafd6a14d0ad021",
"assets/images/Cawgnito.png": "a43bd456fa5cf2251b83839feb6e6319",
"assets/images/Jetragon.png": "816594d4db871b0a7400071ecffa7008",
"assets/images/Loupmoon.png": "c73c00dcca166a7470ac59281fd78c62",
"assets/images/Sibelyx.png": "4a4c781d72552270417fda27de3e2b94",
"assets/images/Grizzbolt.png": "3cb46456f8ce6d7ba7dd249f5ee5bd30",
"assets/images/Killamari.png": "81cb1e42a332d91d661a42c99cb83a9e",
"assets/images/Kingpaca%20Cryst.png": "d4eccc0e0c1f24e3470c2389d8aa2218",
"assets/images/Foxcicle.png": "cacd31b21150d7ccd2e1de835b10f644",
"assets/images/Dazzi.png": "a7796fc1f3f65f22339bc0066307b63f",
"assets/images/Kingpaca.png": "611529e0cf6c4e97bf7bf6b8d3910abd",
"assets/images/Lifmunk.png": "4e90ce0b8d0de5f4e90352c66369e116",
"assets/images/Wumpo.png": "24a248db37cd3df372fa627da46af23e",
"assets/images/Verdash.png": "d609175bbcabb48d23b64ee4fc2f8f66",
"assets/images/Celaray.png": "d86d09734a3017eb88fb7d7df574b410",
"assets/images/Eikthyrdeer.png": "5f85f01d43134d02bbeda287038a345d",
"assets/images/Gobfin.png": "6585b81d8461b2b0e1a10dbea9383117",
"assets/images/Caprity.png": "3947be430a52279ac7155d24d68cdee8",
"assets/images/Faleris.png": "bb1f4d21e440cc3b070a177c79389b1f",
"assets/images/Rushoar.png": "9d4dd9ae6eff65e9d523dd88fd4a5b98",
"assets/images/Frostallion%20Noct.png": "0032eed7ddc0e854f4adb01678eae07d",
"assets/images/Cinnamoth.png": "e092cf99aff27176c955079d0b3f66a5",
"assets/images/Chillet.png": "98732dcf56b2e5099b0c2b1e4df45846",
"assets/images/Anubis.png": "c04a42b2f19a129393fbf605df87d7bf",
"assets/images/Mau.png": "f625c2d69657fa5cea400581125c9bc0",
"assets/images/Robinquill.png": "6e604c8fbaf85891195997f2850576b7",
"assets/images/Elphidran.png": "83984c4e23f7ad3e757a5e6f7f5ac039",
"assets/images/Hoocrates.png": "f40e346298927e5c19f993fc4596f1bc",
"assets/images/Elphidran%20Aqua.png": "89f82959aef154bccbcf010c82c7a8df",
"assets/images/Fuddler.png": "3bae59dcd874943d0be888ecb237b6b7",
"assets/images/Necromus.png": "68dc8db28649c2888fc992fdeee3e270",
"assets/images/Gobfin%20Ignis.png": "d3869e8e70288b04ccc1fea53bca62a5",
"assets/images/Lovander.png": "85fc202b66a3e43489776424d7800871",
"assets/images/Reptyro.png": "97ab399845d50d6b8fce1b497f103da5",
"assets/images/Leezpunk%20Ignis.png": "a403365bee0f1ec18d42f9d081bf4fc1",
"assets/images/Melpaca.png": "0556cbc74ee8bbbd31b35bcdead2be32",
"assets/images/app_bg.jpg": "8ab15a103361d55931ec73a1ff34e9d8",
"assets/images/Rayhound.png": "9f35c09f0c3767386d6f057d96362b33",
"assets/images/Digtoise.png": "44f87c687901f7f47cf8ee14eac32b8c",
"assets/images/Beakon.png": "0e2a155e3fab2d14661be09803f55f15",
"assets/images/Paladius.png": "22b67e8b058b8848e90d83f5011b1d4b",
"assets/images/Dumud.png": "10c131c10b72b6a4167697e9f21dc5a8",
"assets/images/Jormuntide.png": "e27f7a842e2d47485ca944e7abf4c57f",
"assets/images/Suzaku.png": "93be3cc2dd563669671d4bc2b4843f3c",
"assets/images/Daedream.png": "a54a87eaf29440b3a9c271d0b33e911f",
"assets/images/Orserk.png": "9ab332b6539b524fbb653b3064f967d3",
"assets/images/Blazehowl.png": "54826d97414f44e2c70713e0260a1bac",
"assets/images/Vixy.png": "22cce0c139e87b90df315f8ca4ca1356",
"assets/images/Grintale.png": "1a326a4c1a1c2a336883b12cf02fa2b9",
"assets/images/Fenglope.png": "cb0abae0d09f15b7e0b9fef05ac0bc47",
"assets/images/Petallia.png": "1a7a356c57ff676f31b048e492aaac0c",
"assets/images/Dinossom.png": "750ba03dfadb8b3ec7efc3e4ffbc6919",
"assets/images/Menasting.png": "36bb8fadd51b7b25215d768f29589a20",
"assets/images/Relaxaurus%20Lux.png": "7476b23f46a4152e0ba85e680fd89998",
"assets/images/Tombat.png": "d4241263d30dc76504a21b40e55ef43b",
"assets/images/Beegarde.png": "a7f5ea093441aa4d64a46baf4432e19a",
"assets/images/Arsox.png": "8f35c62f38df92967402650857fa006a",
"assets/images/Sparkit.png": "c49634f27718f1457aa2c10f74f5570b",
"assets/images/Pyrin.png": "ce16d678cfaaf8956ae8633f5ef95bda",
"assets/images/Cattiva.png": "b706b3d44148aa9f33969ae1767fb10f",
"assets/images/Tocotoco.png": "a96eb9bae91401efcef743bfe80ae061",
"assets/images/Gumoss.png": "1463b16f27c6bd9446c0906a3da0dad3",
"assets/images/Rooby.png": "6757818546467f94baf6f1361bd61361",
"assets/images/Nitewing.png": "f9c8877ff09d77b960d7910cbdc408dc",
"assets/images/Kitsun.png": "73364e1de7273d9dd587212a02997962",
"assets/images/Flopie.png": "53001ab818d9f06201c8bab679c11e8f",
"assets/images/Incineram.png": "143330b9eaa125e253650f08a8116948",
"assets/images/Wixen.png": "1ca7866e193fb7ff675710b6f9d16fc0",
"assets/images/Mammorest.png": "ab8441de8c18e44850363ccd4de1a5d0",
"assets/images/Pengullet.png": "e5041788f4494ca1b96d1c51c5c03af8",
"assets/images/Elizabee.png": "cca0b219a70d440c620e9231e0df62dc",
"assets/images/Sweepa.png": "f72eda865ace9f7486eec07734b70628",
"assets/images/Vaelet.png": "6f4cf7c654dd57403518c7ecff6b72ea",
"assets/images/Mozzarina.png": "887c0f8b913b03bc579634c50bf019a7",
"assets/images/Frostallion.png": "022b9293c9f58168017b568ec6b5c120",
"assets/images/Azurobe.png": "054dcff495223058517a25a50886231b",
"assets/images/Bristla.png": "dd71c981309653d7e5f4bc2bc5ed9a1d",
"assets/images/Direhowl.png": "a2e385fb133cd237566743250a5d1e2b",
"assets/images/Dinossom%20Lux.png": "4ea2334fe35b92511e06c986289e235f",
"assets/images/Astegon.png": "af4d223489fdd09e0cec0cfb171574d8",
"assets/images/Flambelle.png": "8caf40caec6b751779dd3b49a0f5d067",
"assets/images/Ragnahawk.png": "5ec2dbc2fa45bd9ab61375b2608e9709",
"assets/AssetManifest.json": "899a4a48363cfae913c3affd0b0e159d",
"assets/NOTICES": "ced2ddeea2b1f2f4f45a4c34ffc5bd7e",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "9e2665097a4bf1b29033cddfca35cd20",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"assets/AssetManifest.bin": "00f518513139256baf78ea228de8761b",
"assets/fonts/MaterialIcons-Regular.otf": "ded268fa53aba3fd89ae194f99b3eedc",
"assets/assets/images/Ribbuny.png": "faf3655257ccb166df07d4a3121d56bd",
"assets/assets/images/Woolipop.png": "640a4406a59cc7d0a1fc1f9ed993a7e0",
"assets/assets/images/Swee.png": "d0fe3dbd620be54cc10c07222a4afc62",
"assets/assets/images/Blazamut.png": "f7926fed34a5f9fb497f0946a3d6b714",
"assets/assets/images/Chikipi.png": "6097222dad92ba70671c4e6329f3fe62",
"assets/assets/images/Cremis.png": "912af5c999ae61cec45f06a25170ea9f",
"assets/assets/images/Bushi.png": "511312b61d93c60d20aa630cac09b7a1",
"assets/assets/images/Mossanda.png": "5b2f10ffaba9df159e1615b344ffa134",
"assets/assets/images/Quivern.png": "471c4339c49862f33ffdecd7167b932d",
"assets/assets/images/Frostallion%2520Noct.png": "0032eed7ddc0e854f4adb01678eae07d",
"assets/assets/images/Katress.png": "badcb9814c4c27d4914d21e235db5453",
"assets/assets/images/Wumpo%2520Botan.png": "dafa67b466d5addd709a3bcbe37bdb03",
"assets/assets/images/Univolt.png": "6a281eb4ed5cdbee19f22cdade8d839c",
"assets/assets/images/Tanzee.png": "3b2502cf8d69ae8fedd0f31a50157aa4",
"assets/assets/images/Nox.png": "d4e3dab3700fb2e51cef5c5aeab7419d",
"assets/assets/images/Jolthog.png": "aeaa1f66e8737d02bdbda49d087ec262",
"assets/assets/images/Depresso.png": "bb756fdb6489248559b56988f7109af7",
"assets/assets/images/Warsect.png": "38a458389a1f16cb1d5c11426fd18b03",
"assets/assets/images/Foxparks.png": "86fc0d1a5838fa19cbd33aeb8e7f9038",
"assets/assets/images/Jormuntide%2520Ignis.png": "4dd841550891dc0610097e9451d3e069",
"assets/assets/images/Helzephyr.png": "cfb28e2fd3bec7f182f3a0cd3de9f6d9",
"assets/assets/images/Vanwyrm.png": "c32863267c66c5bfb558c67666877383",
"assets/assets/images/Hangyu.png": "6c95273e5b6aebf010f11242cb5b4978",
"assets/assets/images/Broncherry.png": "a40ed5ccd24cb28c5fc37c13d88ad4dc",
"assets/assets/images/Surfent.png": "2a0efd2db89c258338ea129b5b557210",
"assets/assets/images/Teafant.png": "fa4717a5bc689ff21c5324c227192881",
"assets/assets/images/Surfent%2520Terra.png": "15aa1e27e08111287082954a71e40e50",
"assets/assets/images/Fuack.png": "b69aa18ac598dc8b71cffd3d9afa6519",
"assets/assets/images/Lunaris.png": "6e933edb263176d1c6deeb8ae591f417",
"assets/assets/images/Leezpunk.png": "5f73df71661c21a20c94889f15caaa04",
"assets/assets/images/Maraith.png": "4bc5182a2a12aa251848e51bda62c917",
"assets/assets/images/Gorirat.png": "16e917a6543ceb96d5b58e8b2d8c2e7b",
"assets/assets/images/Vanwyrm%2520Cryst.png": "2208841c1fe4c4983e1438051fa19274",
"assets/assets/images/Suzaku%2520Aqua.png": "909932ec5af16936e90018d6541e1fe4",
"assets/assets/images/Mau%2520Cryst.png": "b3bd30b301a5a950f272eaac3928c939",
"assets/assets/images/Lyleen.png": "ef5d786515c306b98c7601c6d91a87c3",
"assets/assets/images/Lamball.png": "04486e93e05b8067b5994204a734f5f4",
"assets/assets/images/Cryolinx.png": "98f0ea60cd6f3a6141ffe2ea4ba219b9",
"assets/assets/images/Kelpsea.png": "770219bdfefddcb6742a5a0151246e2a",
"assets/assets/images/Broncherry%2520Aqua.png": "d40f67e961049cd0f61129c80a2f5fea",
"assets/assets/images/Relaxaurus.png": "06f67a430dee071d22cc534cef3d6bc3",
"assets/assets/images/Galeclaw.png": "4074c3f81a5612393402b5b1701bb261",
"assets/assets/images/Penking.png": "00bf7597ab12e6ca0b8ed6e63f21d921",
"assets/assets/images/Shadowbeak.png": "84bd30136e484fe821bfeed020e1798a",
"assets/assets/images/Reindrix.png": "0a4b5157898c664cb67e9f2bb0d95573",
"assets/assets/images/Felbat.png": "eeff080bc78e63ed5bafd6a14d0ad021",
"assets/assets/images/Cawgnito.png": "a43bd456fa5cf2251b83839feb6e6319",
"assets/assets/images/Jetragon.png": "816594d4db871b0a7400071ecffa7008",
"assets/assets/images/Loupmoon.png": "c73c00dcca166a7470ac59281fd78c62",
"assets/assets/images/Sibelyx.png": "4a4c781d72552270417fda27de3e2b94",
"assets/assets/images/Grizzbolt.png": "3cb46456f8ce6d7ba7dd249f5ee5bd30",
"assets/assets/images/Killamari.png": "81cb1e42a332d91d661a42c99cb83a9e",
"assets/assets/images/Foxcicle.png": "cacd31b21150d7ccd2e1de835b10f644",
"assets/assets/images/Dazzi.png": "a7796fc1f3f65f22339bc0066307b63f",
"assets/assets/images/Kingpaca.png": "611529e0cf6c4e97bf7bf6b8d3910abd",
"assets/assets/images/Lifmunk.png": "4e90ce0b8d0de5f4e90352c66369e116",
"assets/assets/images/Wumpo.png": "24a248db37cd3df372fa627da46af23e",
"assets/assets/images/Elphidran%2520Aqua.png": "89f82959aef154bccbcf010c82c7a8df",
"assets/assets/images/Jolthog%2520Cryst.png": "c8e29289212d67119ea7440a12a174c2",
"assets/assets/images/Verdash.png": "d609175bbcabb48d23b64ee4fc2f8f66",
"assets/assets/images/Celaray.png": "d86d09734a3017eb88fb7d7df574b410",
"assets/assets/images/Eikthyrdeer.png": "5f85f01d43134d02bbeda287038a345d",
"assets/assets/images/Gobfin.png": "6585b81d8461b2b0e1a10dbea9383117",
"assets/assets/images/Caprity.png": "3947be430a52279ac7155d24d68cdee8",
"assets/assets/images/Faleris.png": "bb1f4d21e440cc3b070a177c79389b1f",
"assets/assets/images/Rushoar.png": "9d4dd9ae6eff65e9d523dd88fd4a5b98",
"assets/assets/images/Gobfin%2520Ignis.png": "d3869e8e70288b04ccc1fea53bca62a5",
"assets/assets/images/Incineram%2520Noct.png": "f74328a1fb68ed2e7071b84aac98133d",
"assets/assets/images/Cinnamoth.png": "e092cf99aff27176c955079d0b3f66a5",
"assets/assets/images/Chillet.png": "98732dcf56b2e5099b0c2b1e4df45846",
"assets/assets/images/Anubis.png": "c04a42b2f19a129393fbf605df87d7bf",
"assets/assets/images/Leezpunk%2520Ignis.png": "a403365bee0f1ec18d42f9d081bf4fc1",
"assets/assets/images/Hangyu%2520Cryst.png": "88d9d7869a15de466fcded2e849a92a5",
"assets/assets/images/Mau.png": "f625c2d69657fa5cea400581125c9bc0",
"assets/assets/images/Robinquill.png": "6e604c8fbaf85891195997f2850576b7",
"assets/assets/images/Relaxaurus%2520Lux.png": "7476b23f46a4152e0ba85e680fd89998",
"assets/assets/images/Elphidran.png": "83984c4e23f7ad3e757a5e6f7f5ac039",
"assets/assets/images/Hoocrates.png": "f40e346298927e5c19f993fc4596f1bc",
"assets/assets/images/Fuddler.png": "3bae59dcd874943d0be888ecb237b6b7",
"assets/assets/images/Necromus.png": "68dc8db28649c2888fc992fdeee3e270",
"assets/assets/images/Lovander.png": "85fc202b66a3e43489776424d7800871",
"assets/assets/images/Reptyro.png": "97ab399845d50d6b8fce1b497f103da5",
"assets/assets/images/Melpaca.png": "0556cbc74ee8bbbd31b35bcdead2be32",
"assets/assets/images/app_bg.jpg": "8ab15a103361d55931ec73a1ff34e9d8",
"assets/assets/images/Rayhound.png": "9f35c09f0c3767386d6f057d96362b33",
"assets/assets/images/Ice%2520Reptyro.png": "1aaf03d46cfb34091fda635554e14603",
"assets/assets/images/Digtoise.png": "44f87c687901f7f47cf8ee14eac32b8c",
"assets/assets/images/Beakon.png": "0e2a155e3fab2d14661be09803f55f15",
"assets/assets/images/Paladius.png": "22b67e8b058b8848e90d83f5011b1d4b",
"assets/assets/images/Dumud.png": "10c131c10b72b6a4167697e9f21dc5a8",
"assets/assets/images/Jormuntide.png": "e27f7a842e2d47485ca944e7abf4c57f",
"assets/assets/images/Suzaku.png": "93be3cc2dd563669671d4bc2b4843f3c",
"assets/assets/images/Daedream.png": "a54a87eaf29440b3a9c271d0b33e911f",
"assets/assets/images/Pyrin%2520Noct.png": "f7a9e078a9bac18700837dcfdcedaa8b",
"assets/assets/images/Orserk.png": "9ab332b6539b524fbb653b3064f967d3",
"assets/assets/images/Blazehowl.png": "54826d97414f44e2c70713e0260a1bac",
"assets/assets/images/Dinossom%2520Lux.png": "4ea2334fe35b92511e06c986289e235f",
"assets/assets/images/Robinquill%2520Terra.png": "4d358dda2de439f3dda33c8a7f1874c8",
"assets/assets/images/Mossanda%2520Lux.png": "db48ae3d832981a3056c34ae882218ea",
"assets/assets/images/Vixy.png": "22cce0c139e87b90df315f8ca4ca1356",
"assets/assets/images/Grintale.png": "1a326a4c1a1c2a336883b12cf02fa2b9",
"assets/assets/images/Fenglope.png": "cb0abae0d09f15b7e0b9fef05ac0bc47",
"assets/assets/images/Petallia.png": "1a7a356c57ff676f31b048e492aaac0c",
"assets/assets/images/Blazehowl%2520Noct.png": "7c39570c36552c036cb2de47356d72b3",
"assets/assets/images/Dinossom.png": "750ba03dfadb8b3ec7efc3e4ffbc6919",
"assets/assets/images/Menasting.png": "36bb8fadd51b7b25215d768f29589a20",
"assets/assets/images/Tombat.png": "d4241263d30dc76504a21b40e55ef43b",
"assets/assets/images/Ice%2520Kingpaca.png": "58c5d0fea522ac20d21d501001dcc515",
"assets/assets/images/Beegarde.png": "a7f5ea093441aa4d64a46baf4432e19a",
"assets/assets/images/Arsox.png": "8f35c62f38df92967402650857fa006a",
"assets/assets/images/Sparkit.png": "c49634f27718f1457aa2c10f74f5570b",
"assets/assets/images/Pyrin.png": "ce16d678cfaaf8956ae8633f5ef95bda",
"assets/assets/images/Cattiva.png": "b706b3d44148aa9f33969ae1767fb10f",
"assets/assets/images/Tocotoco.png": "a96eb9bae91401efcef743bfe80ae061",
"assets/assets/images/Gumoss.png": "1463b16f27c6bd9446c0906a3da0dad3",
"assets/assets/images/Rooby.png": "6757818546467f94baf6f1361bd61361",
"assets/assets/images/Nitewing.png": "f9c8877ff09d77b960d7910cbdc408dc",
"assets/assets/images/Kitsun.png": "73364e1de7273d9dd587212a02997962",
"assets/assets/images/Flopie.png": "53001ab818d9f06201c8bab679c11e8f",
"assets/assets/images/Incineram.png": "143330b9eaa125e253650f08a8116948",
"assets/assets/images/Wixen.png": "1ca7866e193fb7ff675710b6f9d16fc0",
"assets/assets/images/Mammorest.png": "ab8441de8c18e44850363ccd4de1a5d0",
"assets/assets/images/Pengullet.png": "e5041788f4494ca1b96d1c51c5c03af8",
"assets/assets/images/Elizabee.png": "cca0b219a70d440c620e9231e0df62dc",
"assets/assets/images/Lyleen%2520Noct.png": "8b5a019a2a77e8ce4e4b0eb471c7badc",
"assets/assets/images/Sweepa.png": "f72eda865ace9f7486eec07734b70628",
"assets/assets/images/Vaelet.png": "6f4cf7c654dd57403518c7ecff6b72ea",
"assets/assets/images/Mozzarina.png": "887c0f8b913b03bc579634c50bf019a7",
"assets/assets/images/Frostallion.png": "022b9293c9f58168017b568ec6b5c120",
"assets/assets/images/Azurobe.png": "054dcff495223058517a25a50886231b",
"assets/assets/images/Bristla.png": "dd71c981309653d7e5f4bc2bc5ed9a1d",
"assets/assets/images/Direhowl.png": "a2e385fb133cd237566743250a5d1e2b",
"assets/assets/images/Astegon.png": "af4d223489fdd09e0cec0cfb171574d8",
"assets/assets/images/Flambelle.png": "8caf40caec6b751779dd3b49a0f5d067",
"assets/assets/images/Kelpsea%2520Ignis.png": "d34f39af6378f8f0d71b473a5a3e5c13",
"assets/assets/images/Ragnahawk.png": "5ec2dbc2fa45bd9ab61375b2608e9709",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "2fc47c0a0c3c7af8542b601634fe9674",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "143af6ff368f9cd21c863bfa4274c406",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "73584c1a3367e3eaf757647a8f5c5989",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
".idea/vcs.xml": "8c9c0403ab0f6457841c605f08a3340c",
".idea/workspace.xml": "9449ad6ec2b528f39dada73ae2bee241",
".idea/modules.xml": "1eb3b065c55895e347308e50cd717dee",
".idea/web.iml": "52db5efd0fe9f576a1302b8c4b5eac6c",
".idea/misc.xml": "e6b023077aa4876dbe12734108325458"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
