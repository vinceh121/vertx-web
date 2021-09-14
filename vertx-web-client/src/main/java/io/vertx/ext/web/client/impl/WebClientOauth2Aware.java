/*
 * Copyright (c) 2011-2021 Contributors to the Eclipse Foundation
 *
 * This program and the accompanying materials are made available under the
 * terms of the Eclipse Public License 2.0 which is available at
 * http://www.eclipse.org/legal/epl-2.0, or the Apache License, Version 2.0
 * which is available at https://www.apache.org/licenses/LICENSE-2.0.
 *
 * SPDX-License-Identifier: EPL-2.0 OR Apache-2.0
 */
package io.vertx.ext.web.client.impl;

import io.vertx.ext.auth.User;
import io.vertx.ext.auth.authentication.Credentials;
import io.vertx.ext.auth.oauth2.OAuth2Auth;
import io.vertx.ext.web.client.WebClient;
import io.vertx.ext.web.client.WebClientOAuth2;
import io.vertx.ext.web.client.WebClientOAuth2Options;

public class WebClientOauth2Aware extends WebClientBase implements WebClientOAuth2 {

  private final OAuth2Auth oauth2Auth;
  private final WebClientOAuth2Options option;

  private Credentials credentials;

  private User user;

  public WebClientOauth2Aware(WebClient client, OAuth2Auth oauth2Auth, WebClientOAuth2Options options) {
    super((WebClientBase) client);

    if (oauth2Auth == null) {
      throw new IllegalArgumentException("OAuth2Auth cannot be null");
    }
    this.oauth2Auth = oauth2Auth;
    if (options == null) {
      throw new IllegalArgumentException("Options cannot be null");
    }
    this.option = options;

    addInterceptor(new OAuth2AwareInterceptor(this));
  }

  @Override
  public WebClientOAuth2 withCredentials(Credentials credentials) {
     if (credentials == null) {
      throw new NullPointerException("Token Configuration passed to WebClientOauth2Aware can not be null");
    }

    if (this.credentials != null && !this.credentials.equals(credentials)) {
      //We need to invalidate the current data as new configuration is passed
      user = null;
    }

    this.credentials = credentials;
    return this;
  }

  Credentials getCredentials() {
    return credentials;
  }

  User getUser() {
    return user;
  }

  void setUser(User user) {
    this.user = user;
  }

  OAuth2Auth oauth2Auth() {
    return oauth2Auth;
  }

  public int getLeeway() {
    return option.getLeeway();
  }

  public boolean isRenewTokenOnForbidden() {
    return option.isRenewTokenOnForbidden();
  }
}