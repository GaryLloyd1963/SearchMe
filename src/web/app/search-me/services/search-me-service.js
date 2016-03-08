angular.module('searchMeApp')
    .factory("searchMeService", [
        function () {
            "use strict";

            return {
                getSearchResults: function (searchPhrase) {
                    if ( searchPhrase == "" || searchPhrase == null)
                        return ["No search results"];
                    searchPhrase = searchPhrase.toLowerCase();
                    if ( searchPhrase.indexOf('bond') > -1 )
                        return [{title:"Dr No", weblink:"https://www.google.co.uk/?gws_rd=ssl#q=james+bond+dr+no"}
                            , {title:"Goldfinger", weblink:"http://www.google.co.uk"}
                            , {title:"Thunderball", weblink:"www.google.co.uk"}
                            , {title:"The Spy Who Loved Me", weblink:"http://www.google.co.uk"}
                            , {title:"Spectre", weblink:"http://www.google.co.uk"}
                        ];
                    if ( searchPhrase.indexOf('star wars') > -1 )
                        return [{title:"Phantom Menace", weblink:"http://www.starwars.com"}
                            , {title:"Attack of the Clones", weblink:"http://www.starwars.com"}
                            , {title:"Revenge of the Sith", weblink:"http://www.starwars.com"}
                            , {title:"A New Hope", weblink:"http://www.starwars.com"}
                            , {title:"Empire Strikes Back", weblink:"http://www.starwars.com"}
                            , {title:"Return of the Jedi", weblink:"http://www.starwars.com"}
                            , {title:"The Force Awakens", weblink:"http://www.starwars.com"}
                        ];
                    return null;
                }
            };
        }]);