theApp.factory("searchMeService", [
        function () {
            "use strict";

            return {
                getSearchResults: function (searchPhrase) {
                    if ( searchPhrase == "" || searchPhrase == null)
                        return ["No search results"];
                    searchPhrase = searchPhrase.toLowerCase();
                    if ( searchPhrase.indexOf('bond') > -1 )
                        return [{title:"Dr No", weblink:"https://www.google.co.uk/?gws_rd=ssl#q=james+bond+dr+no"}
                            , {title:"Goldfinger", weblink:"https://www.google.co.uk/?gws_rd=ssl#q=james+bond+goldfinger"}
                            , {title:"Thunderball", weblink:"https://www.google.co.uk/?gws_rd=ssl#q=james+bond+thunderball"}
                            , {title:"The Spy Who Loved Me", weblink:"https://www.google.co.uk/?gws_rd=ssl#q=james+bond+spy+who+loved+me"}
                            , {title:"Spectre", weblink:"https://www.google.co.uk/?gws_rd=ssl#q=james+bond+spectre"}
                            , {title:"James Bond Films", weblink:"https://www.google.co.uk/?gws_rd=ssl#q=james+bond+films"}
                        ];
                    if ( searchPhrase.indexOf('star wars') > -1 )
                        return [{title:"Phantom Menace", weblink:"https://www.google.co.uk/?gws_rd=ssl#q=star+wars+phantom+menace"}
                            , {title:"Attack of the Clones", weblink:"https://www.google.co.uk/?gws_rd=ssl#q=star+wars+attack+of+the+clones"}
                            , {title:"Revenge of the Sith", weblink:"https://www.google.co.uk/?gws_rd=ssl#q=star+wars+Revenge+of+the+sith"}
                            , {title:"A New Hope", weblink:"https://www.google.co.uk/?gws_rd=ssl#q=star+wars+a+new+hope"}
                            , {title:"Empire Strikes Back", weblink:"https://www.google.co.uk/?gws_rd=ssl#q=star+wars+empire+strikes+back"}
                            , {title:"Return of the Jedi", weblink:"https://www.google.co.uk/?gws_rd=ssl#q=star+wars+return+of+the+jedi"}
                            , {title:"The Force Awakens", weblink:"https://www.google.co.uk/?gws_rd=ssl#q=star+wars+the+force+awakens"}
                            , {title:"Star Wars Films", weblink:"https://www.google.co.uk/?gws_rd=ssl#q=star+wars+films"}
                        ];
                    return null;
                }
            };
        }]);