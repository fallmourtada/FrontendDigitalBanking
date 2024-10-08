import { HttpClient ,HttpHeaders,HttpParams} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { jwtDecode } from 'jwt-decode';
import { CustomJwtPayload } from './customJwtPayload';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public username!:any;
  public roles!:any;
  public isAuthenticated:boolean=false;
  public accessToken!:any;

  constructor(private http:HttpClient) { }

  public login(username:string,password:string){
    let options={
      headers:new HttpHeaders().set("Content-Type","application/x-www-form-urlencoded")
    }
    let params=new HttpParams()
                              .set("username",username).set("password",password);
     return this.http.post("http://localhost:8082/auth/login",params,options );
  }

  public loadProfile(data:any){
    this.accessToken=data["access-token"];
    this.isAuthenticated=true;
    let decodedJwt=jwtDecode<CustomJwtPayload>(this.accessToken);
    this.username=decodedJwt.sub;
    this.roles=decodedJwt.scope;

  }

  public logout(){
    this.accessToken=undefined;
    this.username=undefined;
    this.roles=undefined;
    this.isAuthenticated=false;
  }

}
