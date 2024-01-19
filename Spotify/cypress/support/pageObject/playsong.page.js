class playSong{

    get searchButton(){
        return  cy.get(':nth-child(2) > .link-subtle');
    }
    get searchInput(){
        return cy.get('[data-testid="search-input"]');
    }
    get musicReporoduction(){
        return  cy.get('[aria-rowindex="1"] > [data-testid="tracklist-row"] > .gvLrgQXBFVW6m9MscfFA');
    }
    get likeButton(){
        return cy.get('[aria-rowindex="1"] > [data-testid="tracklist-row"] > .HcMOFLaukKJdK5LfdHh0');
    }



}

export default new playSong();