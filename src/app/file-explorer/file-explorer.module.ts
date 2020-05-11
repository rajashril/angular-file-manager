import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule } from '@angular/material/icon';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { NewFolderDialogComponent } from './modals/new-folder-dialog/new-folder-dialog.component';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, } from '@angular/forms';
import { RenameDialogComponent } from './modals/rename-dialog/rename-dialog.component';
import { FileExplorerComponent } from './file-explorer.component';
import { NewFileDialogComponent } from './modals/new-file-dialog/new-file-dialog.component';
import {MatListModule} from '@angular/material/list';

@NgModule({
  imports: [
    CommonModule,
    MatToolbarModule,
    FlexLayoutModule,
    MatIconModule,
    MatGridListModule,
    MatMenuModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatInputModule,
    MatListModule,
    FormsModule,
    MatButtonModule
  ],
  declarations: [FileExplorerComponent, NewFolderDialogComponent, NewFileDialogComponent, RenameDialogComponent, NewFileDialogComponent],
  exports: [FileExplorerComponent],
  entryComponents: [NewFolderDialogComponent, NewFileDialogComponent, RenameDialogComponent]
})
export class FileExplorerModule {}
