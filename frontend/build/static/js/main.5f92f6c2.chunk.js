(this["webpackJsonpcare-local"]=this["webpackJsonpcare-local"]||[]).push([[0],{159:function(e,t,a){e.exports=a(307)},164:function(e,t,a){},165:function(e,t,a){},307:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),s=a(3),r=a.n(s),i=(a(164),a(9)),l=a(10),c=a(12),u=a(11),d=a(13),h=(a(165),a(21)),m=a.n(h),g=a(309),p=a(311),f=a(312),b=a(308),y=a(65),v={downtown:"Downtown",midtown:"Midtown",buckhead:"Buckhead",east_side:"East Side",west_midtown:"West Midtown",south_side:"South Side"},w={GoogleAPIKey:"AIzaSyDRSdc9gAG-QspaQyebdxa-j1IAtkBexx4",GoogleAnalyticsID:"UA-161383647-1"},E=a(16),k=[];var S=function(e){var t=Object(n.useState)({loaded:!1,error:!1}),a=Object(E.a)(t,2),o=a[0],s=a[1];return Object(n.useEffect)((function(){if(!k.includes(e)){k.push(e);var t=document.createElement("script");t.src=e,t.async=!0;var a=function(){s({loaded:!0,error:!1})},n=function(){var a=k.indexOf(e);a>=0&&k.splice(a,1),t.remove(),s({loaded:!0,error:!0})};return t.addEventListener("load",a),t.addEventListener("error",n),document.body.appendChild(t),function(){t.removeEventListener("load",a),t.removeEventListener("error",n)}}s({loaded:!0,error:!1})}),[e]),[o.loaded,o.error]};var C=function(e){var t=S("https://www.googletagmanager.com/gtag/js?id="+e.analyticsID);return Object(E.a)(t,1)[0]?(window.dataLayer=window.dataLayer||[],window.gtag=function(){window.dataLayer.push(arguments)},window.gtag("js",new Date),window.gtag("config","UA-157264978-1")):(window.gtag=function(){},window.ga=function(){}),null},O=a(310),A={AddPlaceURL:"/addplace",City:"Atlanta",SiteURL:"https://saveatlfaves.org"},j=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).getBody=function(){return{__html:a.props.body}},a.state={expanded:!1},a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement(o.a.Fragment,null,o.a.createElement("h3",{style:{cursor:"pointer"},onClick:function(t){return e.setState({expanded:!e.state.expanded})}},this.props.title),this.state.expanded&&o.a.createElement("p",{dangerouslySetInnerHTML:this.getBody()}))}}]),t}(o.a.Component);var N=function(e){function t(e,t,a){return"<a target='"+(a=a||"_blank")+"' href='"+e+"'>"+t+"</a>"}function a(e){return t(A.AddPlaceURL,e,"_self")}var n=[{title:"What is SaveATLFaves?",body:"SaveATLFaves is a directory of ".concat(A.City," restaurants and coffee shops that offer online gift cards for purchase. It\u2019s our hope that by providing this resource, we\u2019ll be able to mobilize loyal customers to provide much-needed support for their favorite places in town.")},{title:"Why isn\u2019t my favorite business on your site?",body:"Please help us add your fave ".concat(A.City," food & beverages spots ")+a("here")+". We're open to adding more small business categories if this catches on."},{title:"How else can I support our local businesses beyond purchasing a gift card?",body:"Delivery and pickup are great options! Some restaurants that don\u2019t normally offer delivery have started to offer curbside pickup during the pandemic so check their websites and social media to see what\u2019s available. <br />Tip generously if you can (even for delivery/pickup), since employees are doing extra work and putting their health at risk. <br />Encourage the government to get involved. Sign this "+t("http://chng.it/jM97Sbf9ct","".concat(A.City," petition"))+" to encourage lawmakers to offer emergency small business loans. Please call your US Representative and your Senators. You can be connected to the capitol switchboard at 202-224-3121. Demand that small businesses are part the federal stimulus plan."},{title:"Why is this just for the ".concat(A.City,"? Can you do this for my city?"),body:"As ".concat(A.City," natives, we started this project for our community. Over the past days, people have launched similar tools for their specific cities, or even nationally. Check out ")+t("https://thegivingkichen.org/","The Giving Kitchen")+", "+t("https://helpmainstreet.com/","Help Main Street")+", "+t("https://givelocal.co/","GiveLocal")+", and "+t("https://rallyforrestaurants.com/","Rally for Restaurants")+"."},{title:"Who built this? And why?",body:"I'm Terri Chu and I adapted this site from the one originally created for San Francisco for Kaitlyn & Mike Krieger -- a husband and wife duo in San Francisco. We\u2019re no longer going out because of COVID-19 (San Francisco is under a \u201cshelter in place\u201d ordinance), so we started buying gift cards to help support our favorite cafes and restaurants during this unpredictable time. SaveOurFaves is our simple way to make it easier for people to help local businesses through this difficult time. We got help and advice from some great friends and local business owners, in particular Phil Levin, Zack Schwab, Kristen Berman, Stefanie Krieger, Melissa Dyrdahl, Laura Buhler, and Paul Einbund. You can contact us with any questions about the site at "+t("mailto:info@saveourfaves.org","info@saveourfaves.org")+" and see more about why we decided to start it "+t("https://medium.com/@mikekrieger/launching-saveourfaves-lets-support-restaurants-with-gift-cards-c4fb3e1828cf","here")+"."}],s=[{title:"Why isn\u2019t my business showing up in your search results?",body:"Please help us add your ".concat(A.City," food/beverage business ")+a("here")+". We're open to adding more small business categories if this catches on."},{title:"My business offers gift certificates, but your site says we don\u2019t",body:"Please let us know the details "+a("here")+"."},{title:"How can I start offering online gift cards?",body:"The first step is to check with your POS provider. Many offer their own gift card features (e.g. Square, Toast, ShopKeep), and others integrate with specific third-party providers. If your POS provider doesn\u2019t offer gift cards or integrate with third-party providers, there are some reasonable standalone eGift Card apps like GiftUp or GiftFly. If you\u2019re considering other options, make sure that your business receives the fee for the gift card as soon as the customer purchases the card (otherwise that won\u2019t help you during the crisis). Some services may also ask customers to pay an additional fee when they buy a gift card but be sure it\u2019s a small amount."},{title:"How can I encourage customers to buy gift cards?",body:"People are looking for ways they can support their favorite businesses, so don\u2019t be afraid to let them know that gift cards will help. Reach out to your community on Facebook, Twitter, and Instagram, and use your email list to get in touch with your customers. Ask them to consider buying a gift card for one month of spending to help you weather this storm and keep paying staff, so that you can continue offering great food/coffee/etc. for years to come."}];return o.a.createElement(O.a,{title:"FAQs",visible:e.shouldShow,onOk:e.onClose,width:"80%",onCancel:e.onClose,footer:o.a.createElement("span",null)},o.a.createElement("h2",null,"For Restaurant-goers"),n.map((function(e){return o.a.createElement(j,{key:e.title,title:e.title,body:e.body})})),o.a.createElement("h2",null,"For Businesses"),s.map((function(e){return o.a.createElement(j,{key:e.title,title:e.title,body:e.body})})))};function x(e,t,a){window.gtag("event",e,{event_category:"engagement",event_label:t,value:a})}var P=x,R=a(144),F=a.n(R);function M(e){var t=Object(n.useState)(""),a=Object(E.a)(t,2),s=a[0],r=a[1],i=Object(n.useState)(""),l=Object(E.a)(i,2),c=l[0],u=l[1],d=Object(n.useState)(null),h=Object(E.a)(d,2),g=h[0],p=h[1],f=Object(n.useState)(null),b=Object(E.a)(f,2),y=b[0],v=b[1],k=S("https://maps.googleapis.com/maps/api/js?key="+w.GoogleAPIKey+"&libraries=places"),C=Object(E.a)(k,1)[0],j=Object(n.useState)(!1),N=Object(E.a)(j,2),P=N[0],R=N[1],M=Object(n.useState)(0),I=Object(E.a)(M,2),L=I[0],_=I[1];function T(){r(""),u(""),R(!1),_(0),e.onClose()}function W(){window.setTimeout((function(){T()}),5e3)}return o.a.createElement(O.a,{title:o.a.createElement("span",null,"Add a New ",A.City," Area Small Business"),visible:e.shouldShow,onOk:function(e){0===L?y?(R(!0),x("user-action","submitted-new-place"),_(1),m.a.post("/api/places/submit_new_place",{place_details:y,email:c,gift_card_url:s}).then((function(e){W()})).catch((function(e){e.response&&e.response.data&&e.response.data.error?(p(e.response.data.error),R(!1),_(0)):W()}))):p("Please select a place above."):T()},width:"600px",destroyOnClose:!0,okButtonProps:{shape:"round",className:"primary-button"},cancelButtonProps:{shape:"round"},okText:P?"Done":"Submit",onCancel:T},P&&o.a.createElement("div",null,"Thanks! We'll add this to our queue and add the listing as soon as possible."),!C&&o.a.createElement("div",null,"Loading..."),C&&!P&&o.a.createElement("div",null,o.a.createElement(F.a,{onSelect:function(e){p(null),v(e)},placeholder:"Find the business",inputClassName:"add-link-modal-input",autocompletionRequest:{types:["establishment"],location:{lat:37.2865732484,lng:-121.8287260832},radius:5e3,componentRestrictions:{country:"us"}},types:["establishment"]}),o.a.createElement("input",{className:"add-link-modal-input",onChange:function(e){r(e.target.value)},type:"text",placeholder:"Gift Card Link (if you know it)",value:s}),o.a.createElement("input",{className:"add-link-modal-input",onChange:function(e){u(e.target.value)},type:"text",placeholder:"Contact Email (optional)",value:c}),g&&o.a.createElement("div",{style:{marginTop:8}},g)))}var I=M,L=a(63),_={midtown:[{name:"Midtown",key:"midtown",image:null},{name:"Ansley Park",key:"ansley_park",image:null},{name:"Atlantic Station",key:"atlantic_station",image:null},{name:"Georgia Tech",key:"georgia_tech",image:null},{name:"Technology Square",key:"technology_square",image:null},{name:"Home Park",key:"home_park",image:null},{name:"Loring Heights",key:"loring_heights",image:null},{name:"Sherwood Forest",key:"sherwood_forest",image:null}],buckhead:[],downtown:[]},T=a(156),W=a(153),D=a.n(W);function G(e){var t=Object(n.useState)(null),a=Object(E.a)(t,2),s=a[0],r=a[1],i=Object(n.useState)(!1),l=Object(E.a)(i,2),c=l[0],u=l[1],d=Object(n.useState)(0),h=Object(E.a)(d,2),g=h[0],p=h[1];function f(){r(null),u(!1),p(0),e.onClose()}function b(){window.setTimeout((function(){f()}),5e3)}return o.a.createElement(O.a,{title:o.a.createElement("span",null,"Add a Gift Card link for ",o.a.createElement("b",null,e.place.name)),visible:e.shouldShow,onOk:function(t){0===g?(u(!0),x("user-action","submitted-new-place"),p(1),m.a.post("/api/places/submit_gift_card_link",{place_id:e.place.placeID,gift_card_url:s}).then((function(e){b()})).catch((function(e){b()}))):f()},width:"400px",destroyOnClose:!0,okButtonProps:{shape:"round",className:"primary-button"},cancelButtonProps:{shape:"round"},okText:c?"Done":"Submit",onCancel:f},c&&o.a.createElement("div",null,"Thanks! We'll add this to our queue and get the listing updated as soon as possible."),!c&&o.a.createElement("input",{className:"add-link-modal-input",onChange:function(e){r(e.target.value)},type:"text",placeholder:"Please paste in the link to their gift card site",value:s}))}var U=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).onEmailChange=function(e){a.setState({email:e.target.value,emailSubmitted:!1})},a.onEmailSubmit=function(e){a.state.email&&a.state.email.length&&-1!==a.state.email.indexOf("@")?m.a.post("/api/places/submit_email",{email:a.state.email,place_id:a.props.place.placeID}).then((function(e){a.setState({emailError:null,emailSuccess:!0})})).catch((function(e){a.setState({emailError:"Sorry, we couldn't save your email."})})):a.setState({emailError:"Please enter an email."})},a.hideAddLinkModal=function(){a.setState({showAddModal:!1})},a.state={email:null,emailSubmitted:!1,emailError:null,emailSuccess:null,showAddModal:!1},a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement(b.a,{overlayClassName:"email-popover",trigger:"click",onVisibleChange:function(t){t&&x("user-click","show-email-request-menu",e.props.place.placeID)},placement:"bottomRight",content:o.a.createElement("div",{className:"email-popover-inner"},!this.state.emailSuccess&&o.a.createElement(o.a.Fragment,null,o.a.createElement("div",null,o.a.createElement("input",{onChange:this.onEmailChange,type:"email",value:this.state.email,className:"email-popover-input",placeholder:"Enter your email"}),o.a.createElement(y.a,{className:"email-confirm-button",shape:"round",size:"default",onClick:this.onEmailSubmit,type:"default"},"OK"))),this.state.emailError&&o.a.createElement("div",{class:"email-popover-error"},this.state.emailError),!this.state.emailSuccess&&o.a.createElement(o.a.Fragment,null,o.a.createElement(G,{shouldShow:this.state.showAddModal,place:this.props.place,onClose:function(){e.hideAddLinkModal()}}),o.a.createElement("p",null,"We'll let the business know you're interested. We promise not to spam you."),o.a.createElement("p",null,"(If you've found their link"," ",o.a.createElement("a",{onClick:function(){e.setState({showAddModal:!0})}},"let us know"),")")),this.state.emailSuccess&&o.a.createElement("div",{class:"email-popover-success"},"Thanks! We'll let them know."))},o.a.createElement(y.a,{shape:"round",size:"default",className:this.props.buttonClass,type:"default"},"Request Gift Card"))}}]),t}(o.a.Component),q=function(e){function t(){return Object(i.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.place,t=this.props.size,a="Hi there! I was on SaveYourFave.org and saw that "+e.name+" offers gift certificates over email. I want to support you all, so please let me know how to proceed. Thanks, and stay healthy.",n="large"===t?"large-primary-button":"secondary-button";return o.a.createElement("div",{key:e.placeID},e.giftCardURL&&o.a.createElement(y.a,{shape:"round",size:t,className:n,type:"default",onClick:function(a){x("user-click","get-gift-card-"+t,e.placeID),window.open(e.giftCardURL)}},"Get Gift Card"),!e.giftCardURL&&e.emailContact&&o.a.createElement(y.a,{shape:"round",size:t,className:n,type:"default",onClick:function(n){x("user-click","email-for-gift-card-"+t,e.placeID),window.location.href="mailto:"+e.emailContact+"?subject=Buying a Gift Card%3F&body="+a}},"Get Gift Card"),!e.giftCardURL&&!e.emailContact&&o.a.createElement(U,{place:this.props.place,buttonClass:n}))}}]),t}(o.a.Component),B=function(e){function t(){return Object(i.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e,t=g.a.Title;return e=this.props.suggestedPlaces&&this.props.suggestedPlaces.length?this.props.suggestedPlaces.map((function(e){return o.a.createElement("div",{key:e.placeID,className:"suggested-place"},o.a.createElement(p.a,{style:{backgroundSize:"cover",position:"relative",backgroundImage:"url("+e.imageURL+")",minHeight:"80px"}}),o.a.createElement(p.a,{style:{minHeight:"88px"}},o.a.createElement(t,{className:"suggestion-title",style:{textAlign:"center",width:"100%",marginTop:"12px",padding:"0px 6px"},level:4},e.name),o.a.createElement("div",{style:{margin:"0px auto"}},o.a.createElement(q,{place:e,size:"default"}))))})):Object(T.a)(Array(9).keys()).map((function(e){return o.a.createElement("div",{key:e,className:"suggested-place"},o.a.createElement("div",{style:{marginTop:-4}},o.a.createElement(D.a,{height:168})))})),o.a.createElement("div",{ref:this.props.passRef},o.a.createElement("section",{className:"suggestions-container"},o.a.createElement(p.a,{style:{justifyContent:"center"}},e)),this.props.moreAvailable&&o.a.createElement("div",{style:{textAlign:"center"}},o.a.createElement(y.a,{className:"primary-button",shape:"round",size:"default",onClick:this.props.onLoadMore},"Load More")))}}]),t}(o.a.Component),H=g.a.Title;function z(e){return o.a.createElement("select",{className:"area-picker",value:e.currentArea,onChange:function(t){var a=t.target.value;e.updateArea(a)}},Object.entries(v).map((function(e){var t=Object(E.a)(e,2),a=t[0],n=t[1];return o.a.createElement("option",{value:a},n)})))}var V=function(e){function t(e){var a;Object(i.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).neighborhoodsForArea=function(e){console.log("Area = "+e),console.log("Neighborhoods = "+_[e]);var t=_[e],a=t.slice(0,6),n=t.slice(6);return function(e){for(var t=e.length-1;t>0;t--){var a=Math.floor(Math.random()*(t+1)),n=[e[a],e[t]];e[t]=n[0],e[a]=n[1]}}(n),a.concat(n)},a.componentDidMount=function(){a.updateWindowDimensions(),window.addEventListener("resize",a.updateWindowDimensions),a.fetchSuggestionsForNeighborhood(a.state.neighborhoods[0],Object(L.a)(a),0)},a.componentWillUnmount=function(){window.removeEventListener("resize",a.updateWindowDimensions)},a.componentDidUpdate=function(e,t){if(e.currentArea!==a.props.currentArea){var n=a.neighborhoodsForArea(a.props.currentArea);a.setState({selectedNeighborhood:n[0],loading:!0,suggestedPlaces:null,offset:0,neighborhoods:n}),a.fetchSuggestionsForNeighborhood(n[0],Object(L.a)(a),0)}},a.updateWindowDimensions=function(){a.setState({windowWidth:window.innerWidth})};var n=a.neighborhoodsForArea(e.currentArea);return a.state={suggestedPlaces:null,selectedNeighborhood:n[0],offset:0,fetchOffset:0,windowWidth:0,loading:!0,neighborhoods:n,showingNeighborhoodsFor:e.currentArea},a.ref=o.a.createRef(),a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"fetchSuggestionsForNeighborhood",value:function(e,t,a){var n=this;void 0!==e&&(this.setState({loading:!0}),m.a.get("/api/places/by_neighborhood",{params:{neighborhood:e.key,offset:a}}).then((function(e){var a=e.data.suggestedPlaces,o=e.data.moreAvailable,s=(n.state.suggestedPlaces||[]).concat(a);t.setState((function(e,t){var n=e.fetchOffset+a.length;return{loading:!1,suggestedPlaces:s,fetchOffset:n,moreAvailable:o}}))})).catch((function(e){t.setState({loading:!1})})))}},{key:"loadMoreForCurrentNeighborhood",value:function(){this.fetchSuggestionsForNeighborhood(this.state.selectedNeighborhood,this,this.state.fetchOffset)}},{key:"getCardsForCurrentPage",value:function(){var e=this;return this.state.neighborhoods.slice(this.state.offset).map((function(t){return o.a.createElement("div",{key:t.key,className:"neighborhood-card",style:{textAlign:"center"}},o.a.createElement("div",{className:"neighborhood-card-image"+(e.state.selectedNeighborhood&&e.state.selectedNeighborhood.key===t.key?" neighborhood-card-image-selected":""),onClick:function(a){e.setState({selectedNeighborhood:t,fetchOffset:0,suggestedPlaces:null}),e.fetchSuggestionsForNeighborhood(t,e,0)}},o.a.createElement("div",{className:"neighborhood-card-title"+(e.state.selectedNeighborhood&&e.state.selectedNeighborhood.key===t.key?" neighborhood-card-title-selected":"")},t.name)))}))}},{key:"render",value:function(){var e=this;return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"explore-neighborhood-section"},o.a.createElement(H,{className:"section-title",level:4},"Or explore by neighborhood in"," ",o.a.createElement(z,{currentArea:this.props.currentArea,updateArea:this.props.updateArea}))),this.state.neighborhoods&&o.a.createElement("section",{className:"neighborhood-card-container",style:{maxWidth:this.state.windowWidth>=576?this.state.windowWidth-200:this.state.windowWidth}},0!==this.state.offset&&o.a.createElement("a",{className:"neighborhood-card-arrow neighborhood-card-arrow-left "+(this.state.offset>=this.state.neighborhoods.length-1?"neighborhood-card-arrow-disabled":""),onClick:function(t){e.setState({offset:Math.max(0,e.state.offset-1)})}},"\u2039"),this.getCardsForCurrentPage(),this.state.offset<this.state.neighborhoods.length-1&&o.a.createElement("a",{className:"neighborhood-card-arrow neighborhood-card-arrow-right "+(this.state.offset>=this.state.neighborhoods.length-1?"neighborhood-card-arrow-disabled":""),onClick:function(t){e.setState({offset:Math.min(e.state.neighborhoods.length-1,e.state.offset+1)})}},"\u203a")),(this.state.loading||this.state.suggestedPlaces&&this.state.suggestedPlaces.length>0)&&o.a.createElement(B,{passRef:this.ref,suggestedPlaces:this.state.suggestedPlaces,moreAvailable:this.state.moreAvailable,onLoadMore:function(){e.loadMoreForCurrentNeighborhood()}}),this.state.suggestedPlaces&&0===this.state.suggestedPlaces.length&&this.state.selectedNeighborhood&&o.a.createElement("p",null,"No results for ",this.state.selectedNeighborhood.name))}}]),t}(o.a.Component),Y=function(e){function t(){return Object(i.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=g.a;return o.a.createElement(o.a.Fragment,null,o.a.createElement(p.a,{style:{textAlign:"center",marginTop:"20px",marginBottom:"20px"}},o.a.createElement(e,{className:"section-title",style:{margin:"auto"},level:4},"Local Gems Nearby")),o.a.createElement(B,{suggestedPlaces:this.props.suggestedPlaces}))}}]),t}(o.a.Component),K=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).hideAddLinkModal=function(){a.setState({showAddModal:!1})},a.state={showAddModal:!1},a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this,t=this.props.place;return t?o.a.createElement(p.a,{className:"place-result"},o.a.createElement(f.a,{xs:24,sm:24,md:8,lg:8,xl:8,style:{minHeight:"100px",backgroundPosition:"center center",backgroundSize:"cover",backgroundImage:"url("+t.imageURL+")"}}),o.a.createElement(f.a,{xs:24,sm:24,md:16,lg:16,xl:16,style:{padding:"8px 16px"}},o.a.createElement(p.a,{align:"center"},o.a.createElement(f.a,{span:14,className:"flex-vertical"},o.a.createElement("h2",{className:"place-title"},t.name)),o.a.createElement(f.a,{span:10,className:"flex-vertical"},o.a.createElement("div",{style:{textAlign:"right"},className:"place-address"},t.address.split(",")[0]))),o.a.createElement(p.a,{style:{minHeight:80},align:"bottom"},o.a.createElement(f.a,{xs:24,sm:14,md:14,lg:14,xl:14,style:{position:"relative",top:12}},t.giftCardURL&&o.a.createElement("p",null,t.name," offers gift cards online. Consider prepaying for a month of spending."),!t.giftCardURL&&t.emailContact&&o.a.createElement("p",null,"Consider prepaying for a month of spending."),!t.giftCardURL&&!t.emailContact&&o.a.createElement("p",null,"Do they have a link to sell gift cards?"," ",o.a.createElement("a",{className:"app-link",onClick:function(){return e.setState({showAddModal:!0})}},"Point us to it here."))),o.a.createElement(f.a,{className:"flex-vertical",xs:24,sm:10,md:10,lg:10,xl:10},o.a.createElement("div",{className:"call-to-action-outer"},o.a.createElement(q,{place:t,size:"large"}))),o.a.createElement(G,{shouldShow:this.state.showAddModal,place:t,onClose:function(){e.hideAddLinkModal()}})))):(t={name:"The Snug",address:"2301 Fillmore Street",giftCardURL:null,placeURL:null,emailContact:null,imageURL:"https://lh3.googleusercontent.com/p/AF1QipM09mIPRVymgGeEM5ZSYH21AhYHk-uZQPKrC8c=s1600-w800",placeID:"ChIJ-_7qDsaAhYARKG4Gj6yw2ho"},null)}}]),t}(o.a.Component),J=[{name:"Cooks & Soldiers",address:"691 14th St NW, Atlanta",key:"ChIJLTcZFewE9YgRHsW7wP1bEYs",image_attribution:"['<a href=\"https://maps.google.com/maps/contrib/118337154225877634384\">Cooks &amp; Soldiers</a>']"},{name:"Public School 404",address:"930 Howell Mill Rd, Atlanta",key:"ChIJ____aJME9YgR_gyktYS9sa0",image_attribution:"['<a href=\"https://maps.google.com/maps/contrib/105849776590165710548\">REbranding 360</a>']"},{name:"The Optimist",address:"914 Howell Mill Rd, Atlanta",key:"ChIJr9PpEZME9YgRYg1YifCbOw8",image_attribution:"['<a href=\"https://maps.google.com/maps/contrib/117726245392782967799\">The Optimist</a>']"},{name:"Pijiu Belly",address:"678 10th St NW, Atlanta",key:"ChIJBedpKZME9YgR3VqRCKLPLTI",image_attribution:"['<a href=\"https://maps.google.com/maps/contrib/108513545042510219877\">Alex Moffitt</a>']"},{name:"Monday Night Brewing",address:"670 Trabert Ave NW, Atlanta",key:"ChIJGaB3peUE9YgRnAlaZJyZO9g",image_attribution:"['<a href=\"https://maps.google.com/maps/contrib/108374775105419747538\">Monday Night Brewing</a>']"},{name:"Food Terminal",address:"1000 Marietta St NW #202, Atlanta",key:"ChIJX7w9HaEF9YgRPR83q-zJWis",image_attribution:"['<a href=\"https://maps.google.com/maps/contrib/113930873037724142825\">Torrey Smith</a>']"}],Q=a(154),Z=a.n(Q),X=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).maxSuggestions=8,a.sanitizeInput=function(e){return e.trim().toLowerCase().replace("\xe9","e")},a.getSuggestions=function(e){var t=a.sanitizeInput(e);if(t.length<3)return[];var n=J.filter((function(e){return-1!==a.sanitizeInput(e.name).indexOf(t)})).slice(0,a.maxSuggestions);return 0===n.length&&x("user-roadblock","no-results"),n.push({special:"letUsKnowRow"}),n},a.getSuggestionValue=function(e){return e.name||""},a.renderSuggestion=function(e){return e.special?o.a.createElement("div",null,o.a.createElement("div",null,"Don't see your fave?"),o.a.createElement("div",null,o.a.createElement("a",{onClick:function(){a.setState({showAddModal:!1})},className:"primary-link"},"Let us know"))):o.a.createElement("div",null,o.a.createElement("div",null,e.name),o.a.createElement("div",{className:"autosuggest-address"},e.address))},a.onChange=function(e,t){var n=t.newValue;a.setState({value:n}),a.props.onSearchChanged(n)},a.onSuggestionsFetchRequested=function(e){var t=e.value;a.setState({suggestions:a.getSuggestions(t)})},a.onSuggestionsClearRequested=function(){a.setState({suggestions:[]})},a.renderInputComponent=function(e){return o.a.createElement("div",{className:"react-autosuggest__wrapper"},o.a.createElement("div",{className:"react-autosuggest__left-icon"},"\ud83c\udf7d"),o.a.createElement("input",e))},a.state={value:"",showAddModal:!1,suggestions:[]},a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this,t=this.state,a=t.value,n=t.suggestions,s={placeholder:"Search for an ".concat(A.City," restaurant, coffee, brewery..."),value:a,onChange:this.onChange,onFocus:function(e){x("user-action","search-entered")}};return o.a.createElement("div",{className:"autosuggest-outer"},o.a.createElement(M,{shouldShow:this.state.showAddModal,onClose:function(){return e.setState({showAddModal:!1})}}),o.a.createElement(Z.a,{suggestions:n,focusInputOnSuggestionClick:!1,onSuggestionsFetchRequested:this.onSuggestionsFetchRequested,onSuggestionsClearRequested:this.onSuggestionsClearRequested,getSuggestionValue:this.getSuggestionValue,highlightFirstSuggestion:!0,renderInputComponent:this.renderInputComponent,onSuggestionSelected:function(t,a){if(a.suggestion.special)x("user-click","tell-us-missing-place",e.state.value),e.setState({showAddModal:!0});else{var n=a.suggestion.key;e.props.onPlaceSelected(n)}},renderSuggestion:this.renderSuggestion,inputProps:s}))}}]),t}(o.a.Component),$=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).updateAreaFromPlace=function(e){v[e.area]&&a.props.updateArea(e.area)},a.fetchPlaceInfo=function(e,t){m.a.get("/api/places/detail",{params:{place_id:t}}).then((function(e){a.updateAreaFromPlace(e.data.place);var t=e.data.place,n=e.data.suggestedPlaces;a.setState((function(e,a){return{place:t,suggestedPlaces:n}}))}))},a.state={error:null,hasFetched:!1,place:null,suggestedPlaces:null},a.elementRef=o.a.createRef(),a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement("div",{ref:this.elementRef},o.a.createElement(X,{onPlaceSelected:function(t){e.fetchPlaceInfo(e.elementRef,t)},onSearchChanged:function(t){0===t.length&&e.setState({place:null,suggestedPlaces:null})}}),o.a.createElement("div",{style:{textAlign:"left"}},o.a.createElement(K,{place:this.state.place}),this.state.suggestedPlaces&&this.state.suggestedPlaces.length>0&&o.a.createElement(Y,{suggestedPlaces:this.state.suggestedPlaces})))}}]),t}(o.a.Component),ee=a(104),te=function(e){function t(){return Object(i.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"shareToFB",value:function(){}},{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement(ee.FacebookProvider,{appId:"202370887681802"},o.a.createElement(ee.Share,{href:"https://saveatlfaves.org"},(function(e){var t=e.handleClick;e.loading;return o.a.createElement(y.a,{onClick:t,shape:"round",className:"secondary-button"},"Facebook")}))),o.a.createElement(y.a,{style:{marginLeft:12},shape:"round",className:"secondary-button",onClick:function(){window.open("https://twitter.com/intent/tweet?url=https://saveatlfaves.org&text=Atlanta%20businesses%20need%20us%20more%20than%20ever%20%E2%80%93%20gift%20cards%20can%20make%20a%20big%20difference.%20Please%20join%20me%20in%20supporting%20your%20favorite%20restaurants%20at")}},"Twitter"))}}]),t}(o.a.Component);m.a.defaults.xsrfCookieName="csrftoken",m.a.defaults.xsrfHeaderName="X-CSRFTOKEN";var ae=g.a.Title,ne=o.a.createContext({currentArea:null,updateArea:function(){}}),oe=function(e){function t(e){var a;Object(i.a)(this,t),a=Object(c.a)(this,Object(u.a)(t).call(this,e));var n=window.location.pathname.slice(1).toLowerCase(),s=v[n]?n:"midtown";return a.state={faqVisible:!1,shareVisible:!0,currentArea:s,addPlaceVisible:"addplace"===n},a.selfRef=o.a.createRef(),a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"showFAQModal",value:function(){this.setState({faqVisible:!0})}},{key:"hideFAQModal",value:function(){this.setState({faqVisible:!1})}},{key:"showShareModal",value:function(){this.setState({shareVisible:!0})}},{key:"hideShareModal",value:function(){this.setState({shareVisible:!1})}},{key:"hideAddModal",value:function(){window.history.pushState({},"","/"),this.setState({addPlaceVisible:!1})}},{key:"render",value:function(){var e=this;return o.a.createElement(ne.Provider,{value:{currentArea:this.state.currentArea,updateArea:function(t){P("user-action","selected-area",t),e.setState({currentArea:t})}}},o.a.createElement("div",null,o.a.createElement("div",{style:{marginTop:"0px"}},o.a.createElement(N,{shouldShow:this.state.faqVisible,onClose:function(){e.hideFAQModal()}}),o.a.createElement(I,{shouldShow:this.state.addPlaceVisible,onClose:function(){e.hideAddModal()}}),o.a.createElement(p.a,{className:"hero-row"},o.a.createElement("div",{style:{maxWidth:"1100px",margin:"0px auto"}},o.a.createElement(p.a,{className:"top-header"},o.a.createElement(f.a,{span:24,offset:0},o.a.createElement(ae,{style:{float:"left",color:"white"},level:4},"SaveOurFaves"),o.a.createElement("div",{style:{float:"right"}},o.a.createElement("a",{href:"#"},o.a.createElement(ae,{onClick:function(){e.showFAQModal()},style:{color:"white",display:"inline",marginRight:"16px"},level:4},"FAQ")),o.a.createElement(b.a,{content:o.a.createElement(te,null)},o.a.createElement(y.a,{shape:"round",className:"header-button"},"Tell friends"))))),o.a.createElement(f.a,{xs:{span:18,offset:3},span:16,offset:4,style:{textAlign:"center",padding:"20px 0px"}},o.a.createElement(ae,{level:1,style:{color:"white",textAlign:"center"}},"Your favorite Atlanta restaurant might close forever. Help save it."),o.a.createElement("div",{className:"header-sans"},'Gift cards help "flatten the curve" of lost income from COVID-19.')),o.a.createElement(f.a,{sm:{span:20,offset:2},md:{span:20,offset:2},lg:{span:20,offset:2}},o.a.createElement("div",{className:"main-results"},o.a.createElement("div",{style:{padding:20}},o.a.createElement(ne.Consumer,null,(function(e){return o.a.createElement($,{updateArea:e.updateArea})}))),o.a.createElement("div",{className:"neighborhood-card-container-outer"},o.a.createElement(ne.Consumer,null,(function(e){return o.a.createElement(V,{currentArea:e.currentArea,updateArea:e.updateArea})}))))),o.a.createElement(p.a,{className:"footer-content"},o.a.createElement(f.a,{offset:2,xs:18,sm:18,md:9,lg:9,xl:9,style:{textAlign:"left"}},o.a.createElement(ae,{level:3},"Our duty as loyal customers"),o.a.createElement("p",null,"Our small businesses need us more than ever. Even though we can\u2019t leave home, we can still support local restaurants by buying gift cards. It\u2019s basically a mini-loan, so buy one now and make a plan to use it later.")),o.a.createElement(f.a,{offset:2,xs:18,sm:18,md:9,lg:9,xl:9,style:{textAlign:"left"}},o.a.createElement(ae,{level:3},"3 weeks can kill a business"),o.a.createElement("p",null,"Restaurants have tons of fixed costs: rent, labor, loan repayments, insurance, supplies, repairs \u2013 the list goes on. Even successful restaurants have razor thin margins of 3-5%, and a third have struggled to pay employees at least once. The \u201cshelter-in-place\u201d ordinance keeping customers at home could tip the balance into bankruptcy."))))))),o.a.createElement(C,{analyticsID:w.GoogleAnalyticsID}))}}]),t}(o.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(oe,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[159,1,2]]]);
//# sourceMappingURL=main.5f92f6c2.chunk.js.map