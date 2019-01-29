import { environment } from "./../../environments/environment";
import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { PostDataModel } from "src/models/home/PostDataModel";

@Injectable({
  providedIn: "root"
})
export class GetService {
  constructor(private httpClient: HttpClient) {}

  getAllData(): Observable<Array<PostDataModel>> {
    const url = `${environment.apiUrl}/posts/`;
    return this.httpClient.get<Array<PostDataModel>>(url);
  }

  getDataById(id: number): Observable<PostDataModel> {
    const url = `${environment.apiUrl}/posts/${id}`;
    return this.httpClient.get<PostDataModel>(url);
  }

  updateData(id: number, data: PostDataModel): Observable<PostDataModel> {
    const url = `${environment.apiUrl}/posts/${id}/`;
    const headers = new HttpHeaders({ "Content-Type": "application/json" });
    return this.httpClient.put<PostDataModel>(url, data, { headers });
  }
}
