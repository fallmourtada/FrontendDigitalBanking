import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/authService/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  loginForm!:FormGroup;

  constructor(private authService:AuthService,
              private router:Router,
              private fb:FormBuilder
  ){}

  ngOnInit(): void {
    this.loginForm=this.fb.group({
      username:this.fb.control(''),
      password:this.fb.control('')
    });

    
  }

  handleLogin(){
    //Recuperer les donnees du formulaire
    const formData=this.loginForm.value;
    const username=formData.username;
    const password=formData.password;
    
     // Vérifier que les champs ne sont pas vides
     if (username && password) {
      this.authService.login(username, password).subscribe({
        next: data => {
          this.authService.loadProfile(data);  // Charger le profil utilisateur
          this.router.navigateByUrl("/admin/dashboard");  // Rediriger vers le tableau de bord
        },
        error: err => {
          console.error("Erreur de connexion", err);  // Gérer l'erreur de connexion
        }
      });
    } else {
      console.error("Le formulaire est incomplet.");
    }
  }
  

}
