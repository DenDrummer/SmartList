import {Component, Input, OnInit} from '@angular/core';
import {ToDoParam} from "../../../../model/to-do-param";
import {HttpClient, HttpEventType} from "@angular/common/http";

@Component({
  selector: 'app-image-param-cell',
  templateUrl: './image-param-cell.component.html',
  styleUrls: ['./image-param-cell.component.scss']
})


export class ImageParamCellComponent implements OnInit {
  selected: File;

  @Input()
  compactMode: boolean;
  @Input()
  param: ToDoParam;

  constructor(
    private http: HttpClient
  ) {
  }

  ngOnInit() {
  }

  fileSelected(event) {
    console.debug('file selected:');
    console.debug(event);

    const file: File = event.target.files[0];
    const formData = new FormData();
    formData.append('file', file);
    this.http.post('url/to/your/api', formData, {
      reportProgress: true,
      observe: 'events'
    }).subscribe(events => {
      if (events.type == HttpEventType.UploadProgress) {
        console.debug('Upload progress: ', Math.round(events.loaded / events.total * 100) + '%');
      } else if (events.type === HttpEventType.Response) {
        console.debug('events:');
        console.debug(events);
      }
    });


    // const file: File = event.target.files[0];
    // const reader = new FileReader();
    //
    // reader.readAsDataURL(file);
    // reader.onload = (event) => {
    //   console.debug('read file:');
    //   console.debug(event);
    // };
    // this.param.value = event.target.files[0];
    alert('Actually uploading the image has not been implemented yet');
  }
}
