import { NgModule } from '@angular/core';
import {MatButtonModule, MatTabsModule, MatTableModule, MatFormFieldModule} from '@angular/material';

const materialComponents = [
    MatButtonModule,
    MatTabsModule,
    MatTableModule,
    MatFormFieldModule
]

@NgModule({
    imports: [
        materialComponents
    ],
    exports: [
        materialComponents
    ]
})
export class AppMaterialModule {}
