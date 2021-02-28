import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { HomePage } from '../pages/home/home.component';
import { SignInPage } from '../pages/sign-in/sign-in.component';
import { ShopPage } from '../pages/shop/shop.component';
import { HatsPage } from '../pages/hats/hats.component';
import { JacketsPage } from '../pages/jackets/jackets.component';
import { SneakersPage } from '../pages/sneakers/sneakers.component';
import { WomenPage } from '../pages/women/women.component';
import { MenPage } from '../pages/men/men.component';
import { ContactPage } from '../pages/contact/contact.component';

const renderSignInPage = user => (
  user
    ? <Redirect to="/" />
    : <SignInPage />
);

export const Routes = ({ currentUser }) => (
  <Switch>
    <Route exact path="/" component={HomePage} />
    <Route path="/shop" component={ShopPage} />
    <Route path="/hats" component={HatsPage} />
    <Route path="/jackets" component={JacketsPage} />
    <Route path="/sneakers" component={SneakersPage} />
    <Route path="/women" component={WomenPage} />
    <Route path="/men" component={MenPage} />
    <Route path="/contact" component={ContactPage} />
    <Route path="/sign-in" render={() => renderSignInPage(currentUser)} />
  </Switch>
);
