import { NgModule } from '@angular/core';
import { A11yModule } from '@angular/cdk/a11y';
import { CdkTreeModule } from '@angular/cdk/tree';
import { CdkStepperModule } from '@angular/cdk/stepper';
import { CdkTableModule } from '@angular/cdk/table';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatTreeModule, MatTableModule, MatFormFieldModule, MatTooltipModule, MatButtonModule, MatCheckboxModule, MatToolbarModule, MatChipsModule, MatOptionModule, MatGridListModule, MatProgressBarModule, MatSliderModule, MatSlideToggleModule, MatMenuModule, MatDialogModule, MatSnackBarModule, MatSelectModule, MatInputModule, MatSidenavModule, MatCardModule, MatIconModule, MatRadioModule, MatProgressSpinnerModule, MatTabsModule, MatListModule } from '@angular/material';
@NgModule({
    imports: [
        MatTreeModule, MatTableModule, DragDropModule, MatFormFieldModule, MatTooltipModule, MatButtonModule, MatCheckboxModule, MatToolbarModule, MatChipsModule, MatOptionModule, MatGridListModule, MatProgressBarModule, MatSliderModule, MatSlideToggleModule, MatMenuModule, MatDialogModule, MatSnackBarModule, MatSelectModule, MatInputModule, MatSidenavModule, MatCardModule, MatIconModule, MatRadioModule, MatProgressSpinnerModule, MatTabsModule, MatListModule
    ],
    exports: [
        A11yModule, CdkTreeModule, CdkStepperModule, CdkTableModule, DragDropModule, MatTreeModule, MatTableModule, MatFormFieldModule, MatTooltipModule, MatButtonModule, MatCheckboxModule, MatToolbarModule, MatChipsModule, MatOptionModule, MatGridListModule, MatProgressBarModule, MatSliderModule, MatSlideToggleModule, MatMenuModule, MatDialogModule, MatSnackBarModule, MatSelectModule, MatInputModule, MatSidenavModule, MatCardModule, MatIconModule, MatRadioModule, MatProgressSpinnerModule, MatTabsModule, MatListModule
    ],
})
export class MaterialModule {
}
