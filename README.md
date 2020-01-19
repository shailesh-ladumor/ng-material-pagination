# ng-material-pagination (Pagination Component)
Angular8 &amp; Angular Material Pagination Component
## Contents

- [Getting Started](#gettingStarted)
- [How to Integrate](#howToIntegrate)
     - [Requirements](#requirements)
     - [Integrate](#integrate)
- [Usage](#usage)
- [License](#license)

## Getting Started

- The goal of pagination component is to give an easy way to manage pagination of any table
with easy to use functions, including,
    - Jump to any page 
    - Jump to next Page
    - Jump to previous page
    - Change per page (Display number of records per page)
    
    ##### Check here how looks like! [Demo](https://youtu.be/QAox97SY3GQ) 
     Simple Component View
     ![alt text](https://i.ibb.co/bRBTknG/01-priview1.jpg")
     
     Preview with Jump to page
     ![alt text](https://i.ibb.co/yRYY7MT/02-priview2.jpg")
     
     Preview with change per page
     ![alt text](https://i.ibb.co/ssLbqb5/03-priview3.jpg")
## How to Integrate
- I tried my best to make the integration of the component as easy as possible.

    #### Requirements
    Angular 2+ with Angular Material.    
    
    #### Integrate
    Here are some steps to integrate. 
    * Create Shared Module if you have not in your application.
    * Put pagination directory in shared module.
    * Import following Angular material's inbuilt modules
        * MatIconModule
        * MatButtonModule
        * FormsModule
        * MatFormFieldModule
        * MatSelectModule,
    * Add pagination component into declarations and export section.
    * Now your shared module looks like    
  
    ```
  import {NgModule} from '@angular/core';
  import {CommonModule} from '@angular/common';
  import {
           MatButtonModule,
           MatFormFieldModule,
           MatIconModule,
           MatMenuModule,
           MatSelectModule,
          } from '@angular/material';
  import {PaginationComponent} from './pagination/pagination.component';
  import {FormsModule} from '@angular/forms';
  @NgModule({
          	imports: [
           		CommonModule,
           		MatIconModule,
           		MatButtonModule,
           		FormsModule,
           		MatFormFieldModule,
           		MatSelectModule,
           		MatMenuModule
           	],
           	declarations: [
           		PaginationComponent,
           	],
           	exports: [
           		PaginationComponent,
           	],
   })
   export class SharedModule {}
    ```
    * Now component is ready to use.    
## How to Use
* Import shared module into any module and use pagination component.
* Add pagination component at bottom of table in html or any place you want to use.
* Declare pagination variable before constructor in component.

    ```pagination = new Pagination();```
* Declare pagination change method in component.  
    ```
  onPaginationChange(pagination: Pagination): void {
      this.pagination = pagination;
      const pageNumber = this.pagination.currentPage;
      const pageSize = this.pagination.pageSize;
       	// your code
      }
  ```
* You need to give total records count to component for creating jump to page menu. assign a total
                         records while get records response from service. for Eg
                  
 ```this.pagination.totalCount = response.total_records; // total_counts is integer value for example 15```
  
  ```
export class CategoriesComponent {
       pagination = new Pagination();
     
       constructor(CategoryService categoryService) {
     
       }
       onPaginationChange(pagination: Pagination): void {
         this.pagination = pagination;
         const pageNumber = this.pagination.currentPage;
         const pageSize = this.pagination.pageSize;
         // your code.. you need to pass above page number and page size (number of records in one page) in your app
       }
       
        // this method used for getting records. you can declare own. this is for just example
          getCategories(param): void {
          this.categoryService.getCategories(param).subscribe(
             (response: CategoryResponse) => {
               this.pagination.totalCount = response.totalCount; // set number of total records in your system
             }
          );
        }
}
```        

## License

Pagination Component is free component distributed under the terms of the MIT license.         