import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FileElement } from './model/element';
import { MatMenu, MatMenuTrigger } from '@angular/material/menu';
import { MatDialog } from '@angular/material/dialog';
import { NewFolderDialogComponent } from './modals/new-folder-dialog/new-folder-dialog.component';
import { NewFileDialogComponent } from './modals/new-file-dialog/new-file-dialog.component';
import { RenameDialogComponent } from './modals/rename-dialog/rename-dialog.component';

@Component({
  selector: 'file-explorer',
  templateUrl: './file-explorer.component.html',
  styleUrls: ['./file-explorer.component.css']
})
export class FileExplorerComponent {
  constructor(public dialog: MatDialog) {}

  @Input() fileElements: FileElement[];
  @Input() canNavigateUp: string;
  @Input() path: string;

  @Output() folderAdded = new EventEmitter<{ name: string }>();
  @Output() fileAdded = new EventEmitter<{ name: string }>();
  @Output() elementRemoved = new EventEmitter<FileElement>();
  @Output() elementRenamed = new EventEmitter<FileElement>();
  @Output() elementMoved = new EventEmitter<{ element: FileElement; moveTo: FileElement }>();
  @Output() navigatedDown = new EventEmitter<FileElement>();
  @Output() navigatedUp = new EventEmitter();

  isShowList = false;
  
  toggleDisplay() {
    this.isShowList = !this.isShowList;
  }

  deleteElement(element: FileElement) {
    this.elementRemoved.emit(element);
  }

  navigate(element: FileElement) {
    if (element.isFolder) {
      this.navigatedDown.emit(element);
    }
  }

  navigateUp() {
    this.navigatedUp.emit();
  }

  openNewFolderDialog(param: boolean) {
    let dialogRef = param ? this.dialog.open(NewFolderDialogComponent) : this.dialog.open(NewFileDialogComponent);
    dialogRef.afterClosed().subscribe(res => {
      if (res) {
        if (param) {
          this.folderAdded.emit({ name: res });
        } else {
          this.fileAdded.emit({ name: res });
        }
      }
    });
  }

  openRenameDialog(element: FileElement) {
    let dialogRef = this.dialog.open(RenameDialogComponent, {
      data: { name: element.name },
    });
    dialogRef.afterClosed().subscribe(res => {
      if (res) {
        element.name = res;
        this.elementRenamed.emit(element);
      }
    });
  }

  openMenu(event: MouseEvent, viewChild: MatMenuTrigger) {
    event.preventDefault();
    viewChild.openMenu();
  }
}
