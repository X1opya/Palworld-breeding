'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "1b8c1003aa723f6b2cbb602c77653d3a",
"index.html": "f9d8c3ca6fbb1004fc7e04e4f1f4838c",
"/": "f9d8c3ca6fbb1004fc7e04e4f1f4838c",
"main.dart.js": "652d5632a5fbf820d56060bceb36458d",
"flutter.js": "7d69e653079438abfbb24b82a655b0a4",
"favicon.png": "f461ff344e7b3eec08ab48777ee7ba77",
"icons/icon-192.png": "adbc32f6657b4a7b49bbb7c17d3ac440",
"icons/Icon-maskable-192.png": "adbc32f6657b4a7b49bbb7c17d3ac440",
"icons/Icon-maskable-512.png": "d52b2fea916bb0356dab46c3e865e2c2",
"icons/icon-512.png": "d52b2fea916bb0356dab46c3e865e2c2",
"manifest.json": "515ca6d0ff64f1d1781fa426b76e9635",
".git/config": "7a54458e3e28dcc1426e1f5732daa8a5",
".git/objects/95/a8a3f76c63e9b5e68408790e30d71d04504bfa": "03f23df2a12919a8ad8f36f034fd2e37",
".git/objects/92/33636377aa213844a9af539b70156e8b365b20": "20689dfb34c4dea46e908136bbd1525b",
".git/objects/6f/9042088f85a9175396d5075e7a3cbdc397909f": "a6e74f0e6e8a471370bc745f7e5e5230",
".git/objects/04/6bafdd9883c2d05a2f51d616aa283cb2fc6ba1": "8eaeb3aab69d62dc422e3fb638a529fd",
".git/objects/04/dfda5d94be05231c2cf0050508b90fb415dda1": "5c53264370d891c88186736fcca80237",
".git/objects/6a/b47992de358061013c956bb929ceeee406792a": "2e91ca65449abe4ee2cce874579caf6d",
".git/objects/32/30fc14687324f7dff0323ecad88402a3377a2a": "4b796bfd07b61c2f55043a67bcc714a2",
".git/objects/51/8d4c2b57c79e5b27055393e1cdb9a015cc2619": "86798e705a7cebae41825b1471e9168e",
".git/objects/51/5b4cd89ac2df3adf7920832ab882c812f6d455": "2612f625a56348288e230bdcc0206d42",
".git/objects/3d/3b7768917dda935ddfcc67c5f2ac62875c5783": "40fdffa7f4287b7e7ac0dda2c89169cc",
".git/objects/3d/38e1c63d1ada6f0b09ebae3f201ee6f9a0e066": "7052865606b1f1acc2e0786919a6922e",
".git/objects/0b/a1c51deb6af0713862376f884dcd3fe80ed9ff": "d5da9bbde2ccf2345b1e7b9148ea0a69",
".git/objects/34/bc963fdddaa3ddac5897ed3b874fbb67670d01": "14290cc89076634eeac758109662c4ce",
".git/objects/34/8d43012358d94fe035863c2c3b526d063f9833": "e6404e5780d7559b0a36bf219811c4c4",
".git/objects/34/e4cf5411490b451d2fa629f9f0f577a6c7e017": "31f0fc91c98971808bbb67c62e914b2a",
".git/objects/33/b42d6e80d6daac4be4f11bddbc4482b7faf618": "4621aacfd44b48eb5631560fc26f06cf",
".git/objects/02/3ff6cb5df7ef3b0e1a7dac37b05369d21340de": "bd71e19e642b155786fd8a9a74d8d482",
".git/objects/b5/2e61ee0e295e5c61a88582190686ed1dd4b38f": "dcb640f6dd228c0cde4353621c1390fa",
".git/objects/b2/45fd11bb8a6991e1f50121c83d402222c54399": "ee3bbda28de47f9df4e42cff3fe548fc",
".git/objects/ad/007e64f62cbf12b9467b4b119e67dddecb359f": "4a9199c4981128aea287688bfabbd97a",
".git/objects/d7/859bbf0f116b11d9095075af7a29dc4724cfbe": "94688989fabe014c28fe0fa8b7dd966b",
".git/objects/be/0ccb4f3d1f12d64f9eba7c5d5e4a0c7c254bb7": "37024e4afccf73c8fe7afb40dd8c159c",
".git/objects/b3/cafe4a8cb62602ea31125ab1af7014451e121c": "13d33fb1d9f056d54171e02ef50ca720",
".git/objects/a5/a17395348eaedf592bb6479e1ddfc90d9fbae3": "a365289aba12e525bcc47fb666ca50af",
".git/objects/bd/905cbe50c286bda377020bbe0ac8081d178b94": "65d32697270b53feb0b226987a7aa3f1",
".git/objects/d1/690a1d897b91c5dbb70e024b40d52f87c382de": "3888c7ea942d0a1d6cd545b504ce6fa3",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/ae/457314b5a426f0e51427bfb2f0ef30bc04595b": "cdd4f0c8489090681de4cbea68eac04d",
".git/objects/ae/54f328de8336b315d32f9f3d4296468e4bbe2b": "fbcecc91e6794978f4dd7877d4c40400",
".git/objects/e5/a0426191845ab73948f70a09b1e85ce8308721": "399c2f877058ef4027c987aa74e8cd80",
".git/objects/f4/18336ff77f57d4994e466a263f5205043b0ab4": "3976de76e19208e9e819ef8fdc4afbdd",
".git/objects/f3/c81a0fe8db55c7a7c57a99bd3497cc3d692552": "b41c990e9a2216c75302a55462169901",
".git/objects/f3/83fe03034396a56d3a19744d2009fdd40f4c93": "7ac31b4265528b9e4d7a888ae456d4cb",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/eb/c97ca5de0ffea6c52916292bd3fef0e5e7e7c9": "c7d74edaa0f2c4a36c522d2f98982a8e",
".git/objects/ee/ce7207389576189042490c0230ec8deca11cd2": "e9a037220873531f97bd6245d297d94f",
".git/objects/ee/73c2075c30ed8d924abaf5a8fc2adfdd385e6d": "cc2f0d8d70fe1ba9b2537aa8badbfce3",
".git/objects/ee/f15eebde36c4890da734cbd0f543cedf84dfe0": "c2f6e4b502644b4590e2e6569230f20b",
".git/objects/fd/a6926aae99bb637948a43227827cc7e14ed802": "c761fe8c84721f958d17de807c8328fb",
".git/objects/f2/a867173d08e334d76a42726556467cdbfa352d": "694cacb6c9ea34253e421e562cb85123",
".git/objects/f5/9c58489a79a905caa495a186f564f0f65e0145": "26cf9f5ca68adae0152a693587a8770e",
".git/objects/e3/8ce9f9d70d8818327cebfc849c2a66016a37c2": "ee434c09cab898cff415c07a6c85f11e",
".git/objects/e3/c4aa9b325bb893a33ab278af52080f3a876c39": "d9b16be026675efcf9df0f10aaa5216b",
".git/objects/cf/2113f5a24d4f2c2fceb036c1f098b9b0716807": "44b84e31f97cc47c63a9ff2dcc3e7b0a",
".git/objects/ca/bea741496154c2aacdb18fef90c688c95cc92f": "3ed338ca1bbbb18e9c961f309e34345b",
".git/objects/e4/d6e7ae89ecc5680aac3c322f9d3e5d7815b41d": "c4179be1a9f56c5ea40c967145149702",
".git/objects/e4/c8698b88b691a13b27c9d56aeffc9cf4dde542": "e0734b405e79a9b1c8c09d1b7bf0ba07",
".git/objects/c8/e5edb812487781597b08a97b3ccb91a93c8c21": "39e26ea658690536fbe3203c7fdfbec6",
".git/objects/c8/ad6656db6a134c407c5531d2b853cc3b32c5c1": "e18b6ff26c1af622cf452d4276903891",
".git/objects/c1/f753a9ea71541e123715b7f53e2837fbbdb237": "8d53097baffd5e78eb2bb44e0dd015a7",
".git/objects/20/f5a8819bd640cd1f9d1bf24f122593d7600607": "75fd37ff91931b05f69f43d598f88b27",
".git/objects/4b/f23d7f38cc48e86bb2b73e1a7e44d3f497d703": "7e40a588de3786ad6b42461daf3ea6ea",
".git/objects/11/3783d0c51362a1da6fdce903d58303e2640ecc": "39b27ac00165c81ca9cee9e876170a41",
".git/objects/7d/a07766168b28935ca6852b2baaf0403258fe33": "3ca58ee712f592e2a3aed520663a6a0b",
".git/objects/7c/182143be05f8e2120889826329ee2016894406": "74794e99fad83ae301c52e9fc2e12c41",
".git/objects/7c/bd41e17be075bc679aa727377662d3978c4d78": "3d7c5a4f7e3ccc81878f7c0f79ef73f8",
".git/objects/16/528fc62bb4ddbd223fac46ba387ede0b606e63": "fb69c33069cf496cf942c243a2021978",
".git/objects/42/a7a3e04eb37ae9f690520254d6ca8ca784edca": "31a6e4d1e10e962dedd36d809ee99b58",
".git/objects/89/a532a68a2aeb778981977ce64a1087848f8d96": "33b4745f166dc903a634747db05a2866",
".git/objects/1f/40ca8ee5268537b746b5ea641b25b638be9a00": "12fe868bda387ca729fb2f090b3b3d56",
".git/objects/74/90b9f9ba1c028615c8ee4584c2cd791b7ee9ed": "5e9d0cbdf052bc34f75346d55f526a52",
".git/objects/7b/2984d3c463e0c2e28fad363123592c82a00ab0": "1ae21178493c24a6dd4dafaf7628dfac",
".git/objects/8a/6472385b8cafd5012b89930311c6beece6f5d4": "a9f2dafa16a973291a24bdd24b398c65",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/7e/afd70b707030c74c54cf04af9aa213f1df1455": "7ff0e7e0db2ffb6b021eecbf5e1258c0",
".git/objects/4c/524e8238162e396d25e2d35eadf725780506b3": "34eea4f777cc8e56ca082e2de4aa5381",
".git/objects/21/926d0b32f3fb7fe3cd8e8f97aff5511ff8d048": "9aefe5fca25d45454ef9ffa1922539cd",
".git/objects/75/eb65a2ceaf5a735e9041388eec27d9595c2415": "c9cfaf85ffae44bb51b2547a3c8116f7",
".git/objects/44/facb6648fb5d05c358d5621f25275b49c3237b": "43b6fc0c35329a9e8ff710237160e9c6",
".git/objects/2a/5c81a0b4bf7cdcfd0e9d062f47c9aace5f2b7e": "dfde390ac96abbdf3535f9590a14e9f1",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/6e/8c63f56f8c7f4d6e35a09896f30b3d2db494d3": "f94aaee49b3970bf3f1eddcb44e80a8c",
".git/objects/09/3d26168fa0404efe373961b57130de6d1d2cbc": "40d52edf16daf14d6f3ecdd4fa193553",
".git/objects/96/6394130d455174fa84d4486c9748ca01f46ae1": "b5dc7e1dd4c88bb70acb089c9e9d1e7d",
".git/objects/98/04175bb525f60c050520d9fe88e57e2c9c082d": "687e7f34af6af4ea6443a16d3ad4be31",
".git/objects/53/f63f98419c71df4b9365f2efa47ce182dc4570": "23f85a9ed4a38dad2d8c393a9f0f7237",
".git/objects/3f/42bbb9c0026dd22f59e8c4ce4f0c868e2c7526": "b81536db84b184f8497191f1a206de8f",
".git/objects/6d/6f70e4d2933b09f48517baec61acfa2bb6f813": "c4580d05946c70870660fc652e26b827",
".git/objects/6d/44aba290df6d9140589c210b501347b9cf8342": "5fcf14a4ba4f60ee70aada12392f7920",
".git/objects/99/dc9ee3a22787679639a6284fa26ef84aed46ea": "60f7fc0d732ef95327b8c32df50d6fc6",
".git/objects/99/24d394be1e26776ce0d017dbf408f1dabc0b2d": "7c60a0e63f5d4bce78faee69926c557f",
".git/objects/97/d2b9c49b22c6fb6ba2289ca33f99acfd98ae9e": "d5af9bdc6458f4ef975ec59fa885a8de",
".git/objects/63/89baa606634dfadc263d57d434fc05377f05fe": "c4f59a906710f2f9863725bd87a40b05",
".git/objects/63/b7164ab70c09190c91297f3f9563390d496d67": "a475fd5686de5ffca408f6ac48bde137",
".git/objects/64/6bb56b016cf49c0f6a6c228553e21391c985a3": "b112a8f102083aeb2c90ce0001e327ad",
".git/objects/90/73736352fd7a2f7ecef96c630a15c9c07968dd": "bdea198ade860bd9b6383a4940766604",
".git/objects/bf/2283d992172219f273b898ad1f40fdf3e11d56": "68a6248b69840f5d72e1d116dcd6dbb0",
".git/objects/d3/6a95d2678f8f49602ac773fe7c8beda1d7e8a5": "678b88599c7644cf699d4299afac10a2",
".git/objects/d3/d440c081a0c177c69a49e3ac673aa72409904d": "9135d33fe00798c64276f22a0b7727d9",
".git/objects/a7/229b538e482fa732da1ebe33d13cbfaf13296f": "630d969218ab98e92b42cf03228d5855",
".git/objects/b1/c693733639f061e891e052cebf7a8b44b8db14": "0ffda815d0e30cef325e7b6072565e87",
".git/objects/b1/71c7ed90e4e11a9f5a711b9bc9e164ccdc08f0": "62ad3390516380f80fd784ff5bfed91e",
".git/objects/b1/c0726a121d16a7fda9403d418f60a77500a78d": "22cb5531acebbc682a4af41b41cb646d",
".git/objects/b6/428b02bae1cc81f5d259ee39cf473938a83004": "370d1f926731d515817b2681e641b16b",
".git/objects/d2/3f26ff03529d030c4b8f4d4bc1c4c749c6dc7d": "c9b66f90ec61f58bac22ee0faee78755",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/b667138434a4f6fe052478922153b6739090ef": "8f5ec72b95f767ff545001462c47b59c",
".git/objects/a8/bb949e294db2972a81b701210dcfe5e242eabb": "651f0f2018bc1e678528e1f89bc28388",
".git/objects/a8/c23efd7cc3c5f7f15603e78cc2847b7c601492": "c3451adba45aa302800f75f6ee29c53e",
".git/objects/a8/09bd02f15d557579057953998ccd3e1309625a": "37a48cbc823c147ae378b4c55d3976b2",
".git/objects/de/9500ca0e4c6ae2bf6b50ab73bd1f0978d17e94": "d0ca78d55d766c370b615d3993ed0ab6",
".git/objects/b0/e129f66aa23503d017f9dbc98f8ac470872e4f": "9180c751a134fa0288b3bed8afd364bb",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/0f61fc1e8592b76487c36c7fbbf880f6d11ff3": "9314174ff4701ef82a2a917eef66a849",
".git/objects/c3/adc7baddf18931a3e893d741df72aed3b7183c": "76bd0c62b968094092e7001f5a7faf3d",
".git/objects/c3/b06769839439f384090c0954777b57afd2f3f8": "7fc6d7f82105036a74dbbc41a843207c",
".git/objects/c4/2a19e5810dad99a980932afc32574040e58f9f": "80b734bddf27a8a30886d1a3a16ef3b2",
".git/objects/ea/fd1aeb7a91a2350f6e8a3f6b452c528e508069": "60d9d6d0d14d2cb653dedaa2d4520c28",
".git/objects/cd/02e41d5595fcddbc911ba80f2621a3cff4db4e": "e0ee9473a13d2e4dfc44a7ff5f031473",
".git/objects/cc/914d9d322432e6c23b8c341f4d01b820415019": "475d908de0c297c495d357aa6c7f26da",
".git/objects/cc/ae16ab6a4cbfcdd1f8e94d75f00f7f74131f19": "11f4540ad7fd03d311eac1c3982e1297",
".git/objects/e6/1eb4e1c97c0612ba2e86f3ccbe1d7bc7a860e4": "9591e95069ca2d2c46b0201ebe66aa3c",
".git/objects/f7/985d418a85442ead43d411b20ae221336508e7": "673e51c701503ecd4badf663b4afd2c0",
".git/objects/f7/86ecfd5a145d4025b6eef66053ad9c82db4a92": "c5a328b937e584c9b6f3ff70b27d8488",
".git/objects/f6/c620677e47781b329f31d898dfdc8a084d4745": "194f293e04107017fb0e92601546a16f",
".git/objects/f8/60550cc0960de05674e4748ac80098a5d63af3": "fd766b1a1771c0581974af8912258a1e",
".git/objects/f8/a6abad29a15a12c4fbfa4c016d6144c6e63344": "6dcb06330d47a2d7de665b018d567380",
".git/objects/f8/70d205b9a9ea83b01df177a3d9e446909f2568": "502bfbe034c251b305b5e9d371402a0d",
".git/objects/ce/c36836327abe8be0452c7a842a29dd5538578c": "a330336fb8823c0e86e595712ceafb46",
".git/objects/2c/771bad670cee7450fbaf3986be3fec5011adb5": "a5f6cba2049e97f7c1462970256cba40",
".git/objects/79/7caeb95db6ecbfb79e83912be4a7812a6b4f61": "15f013544e2626957ee3f489713f2687",
".git/objects/1b/09d4b576cd0ab58409f059686d94d08cd21e36": "3b430e5057ab4e3dcfe3f46adeab2590",
".git/objects/4a/b9924a5fc1431c764807a82579fd15f8e36cb7": "8b37ead4580dc7ff272cbba5cfba34b9",
".git/objects/23/1f710211abe075799f93ea3f4cc52739c23db0": "92a4e5e178bb02fb0d94a51f86c5cf92",
".git/objects/23/7ac939bf5f27eeb2917f9261eb3c68a33a140d": "a294a206f9f717925f65d17c134e0724",
".git/objects/23/8ffa62035cf6aead90789f11452332f3e86447": "fbe1a10c51739cf8f36313cff1703b73",
".git/objects/23/0a392513e549332662cc2056e6d3dc5b1e410f": "22fedd3835852e23e811901565d0d652",
".git/objects/8d/3907f06c04d93faf30dddaf3d7a110ca84edd0": "f5f50ba82bc19a3cb2163e002a56c8ab",
".git/objects/85/19f4c95012f5e73ecf2af981760f9a76a4f8f7": "03f153f4720bba4d1b1991746c2fd28b",
".git/objects/49/7357570da2181e3eb63663c49d242f59413542": "933069c799d8f2e106fc07bfac63995b",
".git/objects/78/b73292a605820b82258a49ae9049a43b7e1ba2": "a99b7c4e31a6f55a0eb47ed688931dec",
".git/objects/8b/64250751b33e60ccc439a621aae82c832bd2b9": "791de87d6eca39b5cc2cb04768326ce6",
".git/objects/7f/28ada0a5de07fb1125cc11b03e8f43b35ee07c": "8f7a88d741f5f3d6bf4eb84f56851659",
".git/objects/7f/4aa6831e1981bc73f654a6b5231f48f88df809": "a80cb2ededb956e0d593c10d1f4ebb02",
".git/objects/7a/b0a5ae5f1e80f87244b3c06d6fe924ce703a21": "9dd4d5046ebd2773eb0d800a9c312e89",
".git/objects/22/cfae9ae42432c66fc61001579a73180d0e5dbf": "1bd1402a42a1e951eb9619be668efdbc",
".git/objects/25/93822d519430e0e5d4af3dc8d18d584387817b": "f087a189c88d1234bb862aeeb6926ce8",
".git/objects/25/f5019989afc1f9449fad843ba084c8e4a054ae": "857e308300281908caa1071eb95b3c5c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "283f1956b2e78881256302f589627986",
".git/logs/refs/heads/main": "9f935b6581507754bba644b317cbbb0f",
".git/logs/refs/remotes/origin/main": "135ea7f537b754c52368a12cc7e51878",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "804404a189520eae252ad3d71e93cb21",
".git/refs/remotes/origin/main": "804404a189520eae252ad3d71e93cb21",
".git/index": "7bd0a13f2aea6e79a01c117375d9e790",
".git/COMMIT_EDITMSG": "a8ba672d93697971031015181d7008c3",
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
