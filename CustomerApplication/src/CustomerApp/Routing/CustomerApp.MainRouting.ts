import { HomeComponent } from "../Home/CustomerApp.HomeComponent";

export const  MainRoutes=[
    {path:'Home',component: HomeComponent},
     {path:'Customer',
         loadChildren:()=>import
            ('../Customer/CustomerApp.CustomerModule').then(mod=>mod.CustomerModule)},
    {path:'Supplier',
         loadChildren:()=>import
         ('../Supplier/CustomerApp.SupplierModule').then(mod=>mod.SupplierModule)},
         {path: '', component: HomeComponent}
];
         //the above format used in Angular version 13 

        //the below format used in Angular version 6
            //  {path:'Supplier',
            //  loadChildren:'../Supplier/CustomerApp.SupplierModule#SupplierModule'},
     
