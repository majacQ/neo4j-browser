/*
 * Copyright (c) 2002-2017 "Neo Technology,"
 * Network Engine for Objects in Lund AB [http://neotechnology.com]
 *
 * This file is part of Neo4j.
 *
 * Neo4j is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

import * as firebase from 'firebase'

export const authenticate = dataToken => {
  return firebase.auth().signInWithCustomToken(dataToken)
}

export const initialize = config => {
  if (firebase.apps.length && firebase.apps.length > 0) {
    return
  }

  return firebase.initializeApp(config)
}

export const status = () => {
  return firebase.database().ref('.info/connected')
}

export const getResourceFor = userId => {
  return firebase.database().ref('users/' + userId)
}

export const syncResourceFor = (userId, key, value) => {
  const userRef = firebase.database().ref('users/' + userId)
  userRef.child(key).set(value)
}

export const setupUser = (userId, initialData) => {
  firebase
    .database()
    .ref('users/' + userId)
    .set(initialData)
}

export const signOut = () => {
  firebase.auth().signOut()
}
