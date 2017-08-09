import { Component } from '@angular/core';

@Component({
	selector: 'my-app',
	template: `
<nav class="navbar navbar-default navbar-pf" role="navigation">
  <div class="navbar-header">
    <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse-1">
      <span class="sr-only">Toggle navigation</span>
      <span class="icon-bar"></span>
      <span class="icon-bar"></span>
      <span class="icon-bar"></span>
    </button>
    <a class="navbar-brand" href="/">
      <img src="favicon.ico" alt="PatternFly Enterprise Application" />
    </a>
  </div>
  <div class="collapse navbar-collapse navbar-collapse-1">
    <ul class="nav navbar-nav navbar-utility">

      <li class="dropdown">
        <a class="nav-item-iconic" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
          <span title="Help" class="fa pficon-help"></span>
          <span class="caret"></span>
        </a>
        <ul class="dropdown-menu" aria-labelledby="dropdownMenu1">
          <li><a href="#">Help</a></li>
          <li><a href="#">About</a></li>
        </ul>
      </li>
      <li class="dropdown">
        <a href="#" class="dropdown-toggle" data-toggle="dropdown">
          <span class="pficon pficon-user"></span>
          Brian Johnson <b class="caret"></b>
        </a>
        <ul class="dropdown-menu">
          <li>
            <a href="#">Link</a>
          </li>
          <li>
            <a href="#">Another link</a>
          </li>
          <li>
            <a href="#">Something else here</a>
          </li>
          <li class="divider"></li>
          <li class="dropdown-submenu">
            <a tabindex="-1" href="#">More options</a>
            <ul class="dropdown-menu">
              <li>
                <a href="#">Link</a>
              </li>
              <li>
                <a href="#">Another link</a>
              </li>
              <li>
                <a href="#">Something else here</a>
              </li>
              <li class="divider"></li>
              <li class="dropdown-header">Nav header</li>
              <li>
                <a href="#">Separated link</a>
              </li>
              <li class="divider"></li>
              <li>
                <a href="#">One more separated link</a>
              </li>
            </ul>
          </li>
          <li class="divider"></li>
          <li>
            <a href="#">One more separated link</a>
          </li>
        </ul>
      </li>
    </ul>
    <ul class="nav navbar-nav navbar-primary">
      <li>
        <a routerLink="/imports" routerLinkActive="active">Import Interfaces</a>
      </li>
      <li>
        <a routerLink="/somethingelse" routerLinkActive="active">Something Else</a>
      </li>
    </ul>
  </div>
</nav>

  <div class="container">
  <router-outlet></router-outlet>
 
  </div> 
  `
})


export class AppComponent{
	title = 'uRIBS GUI';
}