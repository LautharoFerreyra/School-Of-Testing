class catalogProductsPage {
    get addNewButton () {
        return cy.get("a.btn.btn-primary");
    }

    get downloadCatalogAsPdfButton () {
        return cy.get("#downlod-catalog-pdf");
    }
    
    get exportButton () {
        return cy.get("#Export");
    }
    
    get dropDownButton () {
        return cy.get("#dropdown");
    }

    get importButton () {
        return cy.get('button[name="importexcel"]');

    }

    get deleteSelectedButton () {
        return cy.get("#delete-selected");
    }

    get searchButton () {
        return cy.get("#search-products");
    }

    get productNameInput () {
        return cy.get("#SearchProductName");
    }
}

export default new catalogProductsPage ();