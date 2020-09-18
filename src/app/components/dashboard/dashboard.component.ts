import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public unsecureData: string;
  public userData: string;
  public adminData: string;
  public unsecuredError: boolean;
  public userError: boolean;
  public adminError: boolean;
  public unsecuredLoaded: boolean;
  public userLoaded: boolean;
  public adminLoaded: boolean;
  public unsecuredErrorResponse: any;
  public userErrorResponse: any;
  public adminErrorResponse: any;
  public keycloakAuth: KeycloakInstance;

  constructor(
    private data: DataService,
    private keycloak: KeycloakService) { }

    ngOnInit() {
      this.keycloakAuth = this.keycloak.getKeycloakAuth();
    }

    login() {
      this.keycloak.login();
    }
    
    logout() {
      this.keycloak.logout();
    }
    
    displayUserInfo() {
      return this.keycloak.getFullName();
    }
    
    private isJsonString = (str) => {
      console.log(JSON.parse(str));
      try {
        JSON.parse(str);
      } catch (e) {
        console.log('test');
        return false;
      }
      return true;
    }

}
