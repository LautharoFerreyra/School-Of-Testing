class addNewProduct {
    get saveButton () {
        return cy.get('button.btn.btn-primary[name="save"]');
    }
    get saveAndContinueEditButton () {
        return cy.get('button.btn.btn-primary[name="save-continue"]');
    }
    get backToProductListButton () {
        return cy.get('a[href="/Admin/Product/List"]');
    }
    get productNameInput () {
        return cy.get('input#Name');
    }
    get shortDescriptionInput () {
        return cy.get('textarea#ShortDescription')
    }
    get fullDescriptionInput () {
        return cy.get('#tinymce');
    }
    get skuInput () {
        return cy.get('input#Sku');
    }
    get categories () {
        return cy.get('.k-multiselect-wrap');
    }
    get manufacturersInput () {
        return cy.get('.k-multiselect-wrap input.k-input')
    }
    get gtinInput () {
        return cy.get('input#Gtin')
    }
    get manuPartNumberInput () {
        return cy.get('input#ManufacturerPartNumber')
    }

    iphone11(ProductName, ShortDescription, FullDescription, SKU, Categories, Manufacturers, GTIN, ManufacturerPartNumber) {
        this.productNameInput.clear().type(ProductName);
        this.shortDescriptionInput.clear().type(ShortDescription);
        this.fullDescriptionInput.clear().type(FullDescription);
        this.skuInput.clear().type(SKU);
        this.categoriesInput.clear().type(Categories);
        this.manufacturersInput.clear().type(Manufacturers);
        this.gtinInput.clear().type(GTIN);
        this.manuPartNumberInput.clear().type(ManufacturerPartNumber);
      }
}

export default new addNewProduct ();