if(!self.define){let e,a={};const i=(i,f)=>(i=new URL(i+".js",f).href,a[i]||new Promise((a=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=a,document.head.appendChild(e)}else e=i,importScripts(i),a()})).then((()=>{let e=a[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(f,c)=>{const s=e||("document"in self?document.currentScript.src:"")||location.href;if(a[s])return;let t={};const d=e=>i(e,s),n={module:{uri:s},exports:t,require:d};a[s]=Promise.all(f.map((e=>n[e]||d(e)))).then((e=>(c(...e),t)))}}define(["./workbox-8637ed29"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/chunks/09632af2-974f83af4c91a98f.js",revision:"h4JeP3lNqWU2eNkW_lRZO"},{url:"/_next/static/chunks/214-d51b1c8082b30782.js",revision:"h4JeP3lNqWU2eNkW_lRZO"},{url:"/_next/static/chunks/311-40065d937c019a52.js",revision:"h4JeP3lNqWU2eNkW_lRZO"},{url:"/_next/static/chunks/318-4644ba003f69bb0a.js",revision:"h4JeP3lNqWU2eNkW_lRZO"},{url:"/_next/static/chunks/705-7598db2e4ef2c41f.js",revision:"h4JeP3lNqWU2eNkW_lRZO"},{url:"/_next/static/chunks/841-c61d388d3d40fb13.js",revision:"h4JeP3lNqWU2eNkW_lRZO"},{url:"/_next/static/chunks/997-f2a8fe5124c6d5fe.js",revision:"h4JeP3lNqWU2eNkW_lRZO"},{url:"/_next/static/chunks/app/layout-4d19104576efbd45.js",revision:"h4JeP3lNqWU2eNkW_lRZO"},{url:"/_next/static/chunks/app/loading-a7df3b56d8ec1915.js",revision:"h4JeP3lNqWU2eNkW_lRZO"},{url:"/_next/static/chunks/app/not-found-a82781560e47c20b.js",revision:"h4JeP3lNqWU2eNkW_lRZO"},{url:"/_next/static/chunks/app/page-a1f59ddcc6f55067.js",revision:"h4JeP3lNqWU2eNkW_lRZO"},{url:"/_next/static/chunks/app/signin/page-3ec6180f804784bb.js",revision:"h4JeP3lNqWU2eNkW_lRZO"},{url:"/_next/static/chunks/app/yomiage/page-c7a662acb20248e4.js",revision:"h4JeP3lNqWU2eNkW_lRZO"},{url:"/_next/static/chunks/framework-510ec8ffd65e1d01.js",revision:"h4JeP3lNqWU2eNkW_lRZO"},{url:"/_next/static/chunks/main-3de18f56cb3301bb.js",revision:"h4JeP3lNqWU2eNkW_lRZO"},{url:"/_next/static/chunks/main-app-fb3f13cdb57dd3bb.js",revision:"h4JeP3lNqWU2eNkW_lRZO"},{url:"/_next/static/chunks/pages/_app-7da637e729b24622.js",revision:"h4JeP3lNqWU2eNkW_lRZO"},{url:"/_next/static/chunks/pages/_error-2f728d66e687cc1b.js",revision:"h4JeP3lNqWU2eNkW_lRZO"},{url:"/_next/static/chunks/polyfills-78c92fac7aa8fdd8.js",revision:"79330112775102f91e1010318bae2bd3"},{url:"/_next/static/chunks/webpack-f7aede5f45303f63.js",revision:"h4JeP3lNqWU2eNkW_lRZO"},{url:"/_next/static/css/341d0e9040cbc6dc.css",revision:"341d0e9040cbc6dc"},{url:"/_next/static/css/af47bddd2741bee2.css",revision:"af47bddd2741bee2"},{url:"/_next/static/h4JeP3lNqWU2eNkW_lRZO/_buildManifest.js",revision:"7dbc43deaa2946a40f8ce8f3ea7fb746"},{url:"/_next/static/h4JeP3lNqWU2eNkW_lRZO/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/media/010a274bb88558a2-s.woff2",revision:"851e7c7eee5f60db187c975ecd14bd68"},{url:"/_next/static/media/05401793cb9b20fb-s.woff2",revision:"c7beb0455b0de0e190191425c29f826b"},{url:"/_next/static/media/0633ce724a977091-s.woff2",revision:"33fcd65081fb40e3b27887a59e04fb93"},{url:"/_next/static/media/0723da5a30845440-s.woff2",revision:"9f6f0a94a0810fb10742a4131b16166d"},{url:"/_next/static/media/0d38986d23c75523-s.woff2",revision:"a7585f4fcf0fe57efe38f7852f4cbe95"},{url:"/_next/static/media/0ef3472be80ef959-s.woff2",revision:"ccec82c94127382d9b3287eaefbd75f7"},{url:"/_next/static/media/101630e62195b646-s.woff2",revision:"22d9bbeff2fd9a7aca97a0b49ee9354f"},{url:"/_next/static/media/10222fd72087c1f8-s.woff2",revision:"3d9b82b9ff62e4abc587b2071461cab6"},{url:"/_next/static/media/10c3ad65c27af58a-s.woff2",revision:"debe2ed743389e663870834547f31927"},{url:"/_next/static/media/11c50b9edaab444f-s.woff2",revision:"d6eb0e4c482d16a69cb9b07cd03f28e2"},{url:"/_next/static/media/12864472b59c45e5-s.woff2",revision:"6ce9768045313a0a3ece665078c8970e"},{url:"/_next/static/media/1732921ed2f29ccb-s.woff2",revision:"a9a0df865e3d63658dc1aa5ce0a92153"},{url:"/_next/static/media/18e69b1bf489f3e8-s.woff2",revision:"30a41f94fa7af70011697ea0fd8e5e0f"},{url:"/_next/static/media/1a9b81eb856c0f4d-s.woff2",revision:"f16c7427bbbceec44c8d57bd24a41acb"},{url:"/_next/static/media/20ae0e738f12a4ac-s.woff2",revision:"bf3546a218cf4bab2d69e88ad8210f56"},{url:"/_next/static/media/20e72f4d474430a2-s.woff2",revision:"b93cc2e6eb3be483819d75d1b22596b2"},{url:"/_next/static/media/235713de84e9cff4-s.woff2",revision:"06a50018e097b43526a95f4ae5c1746e"},{url:"/_next/static/media/24a02d14547a9ddf-s.woff2",revision:"e52401f839adfe80ce6676e65682fe90"},{url:"/_next/static/media/25171b9073e60971-s.woff2",revision:"10f7368c846838e6f27979b89d0e7162"},{url:"/_next/static/media/29fca9200807c7d4-s.woff2",revision:"62a89b76f5bf611073256137fa526149"},{url:"/_next/static/media/2dba46bfc14ba3f6-s.woff2",revision:"178fec49ac623aa8de05fd4def768f9d"},{url:"/_next/static/media/2e9f1a8a81fe2fa8-s.woff2",revision:"ac092110ac90b205c70159c0b8270978"},{url:"/_next/static/media/30db5f0b348496c8-s.woff2",revision:"d0512839230e3f53f81cc78f827cf396"},{url:"/_next/static/media/31afa42f90a18eca-s.woff2",revision:"e6a43349d0939c27e22ee9c7870270cf"},{url:"/_next/static/media/32615d47694d8793-s.woff2",revision:"5712c0ca981fd39b1b1867ba981cf11a"},{url:"/_next/static/media/3280941e978d4e7d-s.woff2",revision:"0baa75d92b22deb455ca7e2f3cff3071"},{url:"/_next/static/media/364821d2b26575a5-s.woff2",revision:"aa79afc3b3b3b4916a2626f92586609f"},{url:"/_next/static/media/3afe351ebd728ab5-s.woff2",revision:"db2c0d2e0929495010e3e51f4c4a3edc"},{url:"/_next/static/media/41404d75d62a7aca-s.woff2",revision:"e5962184740136d806ff298400167edf"},{url:"/_next/static/media/421af5c6b8994835-s.woff2",revision:"c245013a0000464f55e38a79fc46f56c"},{url:"/_next/static/media/43de0b0d9fd59869-s.woff2",revision:"15e0b90f45f2cc1de1fb01a5f0e14331"},{url:"/_next/static/media/4529fafa1e236e72-s.woff2",revision:"f0ee2157de6100353e38118a7fe12e53"},{url:"/_next/static/media/47acda25aa68053d-s.woff2",revision:"856a78e9500c3d78b66042e5f6d85a6f"},{url:"/_next/static/media/4883c3a3e4a68602-s.woff2",revision:"60b73e1fbef6981e8449bbbd5b3c66f3"},{url:"/_next/static/media/4965019b001f184e-s.woff2",revision:"b42e6f411c66ba400305cf270372fd97"},{url:"/_next/static/media/4f1ecc3cca9472f4-s.woff2",revision:"7ac0f0d49c3ab61b03191af783527a92"},{url:"/_next/static/media/4f7f01255956a578-s.woff2",revision:"79acdba0c48c457acb0297e2e75c2c07"},{url:"/_next/static/media/504e7648d15bfca8-s.woff2",revision:"c53dc7a70c04d4fbe814bf6b3ca724b5"},{url:"/_next/static/media/54154468b15965bd-s.woff2",revision:"e4ba10633168d4e7347a8b6475318c2c"},{url:"/_next/static/media/541a25ed729069da-s.woff2",revision:"2cbf529548c2b67780867db4a2388af5"},{url:"/_next/static/media/54a1d8db839fc4e4-s.woff2",revision:"6444af88379726a1a4eaec832ed0c771"},{url:"/_next/static/media/5640c99d8abfdde6-s.woff2",revision:"b706766f71a2a24ff79af4912443928d"},{url:"/_next/static/media/56b5c7b9664b4a14-s.woff2",revision:"b3afdfa8d0b37065c74afbfe37e93a97"},{url:"/_next/static/media/5d17a16b2084010c-s.woff2",revision:"fa28d2693c0b019c6eb40fbbdd7fe3c7"},{url:"/_next/static/media/5d762618a2b65746-s.woff2",revision:"ae1df4d8da1e735b876653f6744ad01b"},{url:"/_next/static/media/5df689e3725cce18-s.woff2",revision:"58b8431d46b96832da939a60783d8ebb"},{url:"/_next/static/media/5eac45f561244384-s.woff2",revision:"a963ec3dab198f0bc3042e00c9f4c21b"},{url:"/_next/static/media/601ab1c73f96cdd3-s.woff2",revision:"d60c609294c871aa8cd252dcf6188dd7"},{url:"/_next/static/media/65ca7b0d346024ef-s.woff2",revision:"27bb0e704ddd7ba836ddb05c2bc3f6e2"},{url:"/_next/static/media/6b3993863792f7ce-s.woff2",revision:"0790bd97889e0d2acc7bfcd5996eccfd"},{url:"/_next/static/media/6f862635aa5d87e4-s.woff2",revision:"be68fdd9049a6536981b34ee98c534a0"},{url:"/_next/static/media/71a56ccb8184a976-s.woff2",revision:"4255b07808d0fd0028e85296ad1c2ca6"},{url:"/_next/static/media/722d01550cd484dc-s.woff2",revision:"b89e1778f58b92eb05102ea75e27a695"},{url:"/_next/static/media/7244a0a657c17611-s.woff2",revision:"44c827298957c4e6aa0da1e756a65510"},{url:"/_next/static/media/795c01529f966047-s.woff2",revision:"4aca7f168ff791ad88145e6a38233e09"},{url:"/_next/static/media/7a29132308cf168b-s.woff2",revision:"fa11be7cebdc5e04d671006a194a8a21"},{url:"/_next/static/media/7ea5bbc47db3220a-s.woff2",revision:"4584eba2f958275c905ccc2281efaa70"},{url:"/_next/static/media/81fe971813835b3c-s.woff2",revision:"0ae08d11a4c05e58336227e174c5feb2"},{url:"/_next/static/media/832068879a3e0bad-s.woff2",revision:"418a1fd047b92c69e5e759e8ece86316"},{url:"/_next/static/media/833193882d843eed-s.woff2",revision:"23a9ec4d4387ba207ce65fb722ddf7a3"},{url:"/_next/static/media/83fb2aacb6b3d8b8-s.woff2",revision:"ed6643744fba86f7666c23e99bed1eda"},{url:"/_next/static/media/8793d1fe514485a8-s.woff2",revision:"0b43ec37a28217d44492fa6ee33f21b1"},{url:"/_next/static/media/87a48cb3640f5240-s.woff2",revision:"daf42f445fd8745e3ccf0e38ba5af140"},{url:"/_next/static/media/88b4df7fa81f8e58-s.woff2",revision:"8eb0d647877de383161add340a9af395"},{url:"/_next/static/media/8e719e184b0eb672-s.woff2",revision:"8f0e806a4a61b7928c310b80c3d185f5"},{url:"/_next/static/media/90cffe0eb927b4fc-s.woff2",revision:"8c783ed882b240721fe0e543a385ada7"},{url:"/_next/static/media/92378df654218d60-s.woff2",revision:"4a0d495110539598523b4b14e4fa2d29"},{url:"/_next/static/media/92ee51667171875c-s.woff2",revision:"edcd1591a8fce8747ee87085ad56238a"},{url:"/_next/static/media/97a464cd8a0e49af-s.woff2",revision:"f25f7384e85d25da42512154ae449c5b"},{url:"/_next/static/media/9ac034efd5c9c1c4-s.woff2",revision:"32c5f97cf6149bd7013d888d2316408c"},{url:"/_next/static/media/9e53c97bfc0e356f-s.woff2",revision:"4cb502b699074e5c50bddcb3d79b844e"},{url:"/_next/static/media/a08b3e286215842f-s.woff2",revision:"596c1785c4b6147aeeaabf1be4b6d64a"},{url:"/_next/static/media/a12cfab5d6811b1a-s.woff2",revision:"882f23b6712809767564c177dfd14f20"},{url:"/_next/static/media/a228f2a1103efd3a-s.woff2",revision:"5f4b6027b7566a363d2814a2b2f7313a"},{url:"/_next/static/media/a6c0a9eb620c5882-s.woff2",revision:"46d7bbb6b83ccde5f4c10df6286b7e54"},{url:"/_next/static/media/a95cd13a74bb88d8-s.woff2",revision:"7c75c8b9cb0b465fc23fa43cea3c97c3"},{url:"/_next/static/media/a9ca2d2893f8dcbb-s.woff2",revision:"ccd8dbd0ab9d2f42180278dc8ac6b387"},{url:"/_next/static/media/ab65f63664682377-s.woff2",revision:"35167501de5ca5fc8e9fe7f6a13a4f9e"},{url:"/_next/static/media/ac18cad2274fabaa-s.woff2",revision:"2433d3ca7f5ec7c524b18221b43053eb"},{url:"/_next/static/media/adf647b37505ca26-s.woff2",revision:"86c358e7c9bcaec6f050f9a243f5a801"},{url:"/_next/static/media/b02019c099d87645-s.woff2",revision:"696567868ee17b7c5f491de353a36ff5"},{url:"/_next/static/media/b071470069ea60f7-s.woff2",revision:"03e45e2ff7b1787fc686997fc5412db6"},{url:"/_next/static/media/b13fd1bcdf9ace2a-s.woff2",revision:"9cc4532731fd0e055fbce1bd5560c6c2"},{url:"/_next/static/media/b47bae0eb01cc43e-s.woff2",revision:"c0d3a534d773736de6f07993dd291a06"},{url:"/_next/static/media/b84152e928bcc09c-s.woff2",revision:"5a133cf5e15c5d7572547bcc03d8d9b0"},{url:"/_next/static/media/b85b244189bc390c-s.woff2",revision:"83cdcf661cce231763f3a3cea08ef07a"},{url:"/_next/static/media/bbd086b6a241ddbc-s.woff2",revision:"d685bc26a27f8f586796c322acb8e279"},{url:"/_next/static/media/bcab8398965d54ca-s.woff2",revision:"d085877af6e275cb1934ce0d1bc4405c"},{url:"/_next/static/media/be78c960edafe48b-s.woff2",revision:"05f958b0abc34ed45be970d848b5058b"},{url:"/_next/static/media/bf30eb6f25e1ef03-s.woff2",revision:"1e5aef52f9de9f5acf8558e5e3124b89"},{url:"/_next/static/media/c1bc2c480f53fc8b-s.woff2",revision:"11850bc79d1ec82a711f21a7de262480"},{url:"/_next/static/media/c2b234e733965e00-s.woff2",revision:"e7b41ec83541e09f22f692fad7a5147c"},{url:"/_next/static/media/c46d667997e50411-s.woff2",revision:"4e351f5ae50a7748191eb70ead3c6113"},{url:"/_next/static/media/c5d0fc89e4941a70-s.woff2",revision:"4909ff17cc54ddcb05bbefad0a75595d"},{url:"/_next/static/media/c824505a32d49cc1-s.woff2",revision:"a6a132c8aafbbe6412638484d17c80a4"},{url:"/_next/static/media/ce72ad506de3e077-s.woff2",revision:"5362c7381d9e687f9048adf29ddeab1d"},{url:"/_next/static/media/d551c3ce360a0c72-s.woff2",revision:"55fc072b0a5b289b673438cdbc62d53a"},{url:"/_next/static/media/d8646e41ad37d411-s.woff2",revision:"5ad8c404de90e4fc3cc58922b9fc1d4e"},{url:"/_next/static/media/d87cb854e8fabb13-s.woff2",revision:"2e5ff33da7f815ffa1fcaffd01be29eb"},{url:"/_next/static/media/d9d1f4083a1bf182-s.woff2",revision:"19a96a8a5b2dd5b97b770756822240dd"},{url:"/_next/static/media/dc2557ffd9edf57a-s.woff2",revision:"3f80084656305d9530ee5fbd7599e365"},{url:"/_next/static/media/dca0927ff8690594-s.woff2",revision:"31050af42d10c44bec92b8a02b06e84b"},{url:"/_next/static/media/dd90e2f32083c301-s.woff2",revision:"eabc978c06e8cb3178b064c3dfc83aaf"},{url:"/_next/static/media/dd9c115028080427-s.woff2",revision:"2d340379e90f4ca5505303ecc00437f3"},{url:"/_next/static/media/e1d03a3f415ba43e-s.woff2",revision:"411b060955d8ea9e5a77a88e1f4b5381"},{url:"/_next/static/media/e1fa70ddff758258-s.woff2",revision:"203ef8e712f53d2c87f1cfa6c992a8ad"},{url:"/_next/static/media/e2f1ca7323ff2ef2-s.woff2",revision:"2a93dcc2a6bd2cd5ce52bfb3584a2362"},{url:"/_next/static/media/e33214a5553668b1-s.woff2",revision:"a2a1354b80cd6a03dab2203902c621fc"},{url:"/_next/static/media/e5bfe78525f4b6d3-s.woff2",revision:"53437e518dda27b44e4310a0b0f41017"},{url:"/_next/static/media/e7e4cb7f55602521-s.woff2",revision:"1c72c8ab650b23e761201b3715669350"},{url:"/_next/static/media/e7eda2e68c2bba92-s.woff2",revision:"eb3cb07177a00163136b2ba154001784"},{url:"/_next/static/media/e8f33f457585f8d7-s.woff2",revision:"8a5b017ff7b907db10cfe4b1b2c92dc1"},{url:"/_next/static/media/eb4b1bbcf3a09a7e-s.woff2",revision:"de77a273c70ebb690e8431d1663679fc"},{url:"/_next/static/media/ee958480299d7d0e-s.woff2",revision:"9cc5b2335e9712e7505f4f42baa46883"},{url:"/_next/static/media/f43b0df76178546b-s.woff2",revision:"fa950dbdfa7ae3c590ac5eb4ebd6a8b2"},{url:"/_next/static/media/f56118dd09ac009d-s.woff2",revision:"cfb7348986128ebcff6fc2e097d2ea24"},{url:"/_next/static/media/f5f72372ea5a48e9-s.woff2",revision:"5d804e79fb22c03e5b82791329825782"},{url:"/_next/static/media/f8b482a4d18e1bdc-s.woff2",revision:"9222f2a022df400adc75682c72276f14"},{url:"/_next/static/media/fa9da39cab415471-s.woff2",revision:"193c8f57a7eeaa1d6c0cb55e5b331be3"},{url:"/_next/static/media/ffb50197b71595dc-s.woff2",revision:"d0e9fbe44ea51abf03d821febe0ef126"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({response:e})=>e&&"opaqueredirect"===e.type?new Response(e.body,{status:200,statusText:"OK",headers:e.headers}):e}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:2592e3})]}),"GET"),e.registerRoute(/\/_next\/static.+\.js$/i,new e.CacheFirst({cacheName:"next-static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:48,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({sameOrigin:e,url:{pathname:a}})=>!(!e||a.startsWith("/api/auth/")||!a.startsWith("/api/"))),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({request:e,url:{pathname:a},sameOrigin:i})=>"1"===e.headers.get("RSC")&&"1"===e.headers.get("Next-Router-Prefetch")&&i&&!a.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages-rsc-prefetch",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({request:e,url:{pathname:a},sameOrigin:i})=>"1"===e.headers.get("RSC")&&i&&!a.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages-rsc",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:{pathname:e},sameOrigin:a})=>a&&!e.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({sameOrigin:e})=>!e),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
