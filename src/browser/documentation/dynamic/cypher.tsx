/*
 * Copyright (c) "Neo4j"
 * Neo4j Sweden AB [http://neo4j.com]
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

import React from 'react'
import ManualLink from 'browser-components/ManualLink'
const title = 'Cypher'
const subtitle = 'A graph query language'
const category = 'browserUiCommands'
const filter = ['cypher']
const description = (
  <>
    <p>
      {`Cypher is Neo4j's graph query language. Working with a graph is all
      about understanding patterns of data, which are central to Cypher queries.`}
    </p>
    <p>
      Use
      <code>MATCH</code> clauses for reading data, and
      <code>CREATE</code> or
      <code>MERGE</code> for writing data.
    </p>
    <div className="links">
      <div className="link">
        <p className="title">Documentation</p>
        <p className="content">
          <ManualLink chapter="cypher-manual" page="/">
            Cypher introduction
          </ManualLink>
        </p>
      </div>
      <div className="link">
        <p className="title">Related</p>
        <p className="content">
          <a help-topic="match">:help MATCH</a>
          <a help-topic="where">:help WHERE</a>
          <a help-topic="return">:help RETURN</a>
          <a help-topic="create">:help CREATE</a>
          <a help-topic="merge">:help MERGE</a>
          <a help-topic="delete">:help DELETE</a>
          <a help-topic="detach-delete">:help DETACH DELETE</a>
          <a help-topic="set">:help SET</a>
          <a help-topic="foreach">:help FOREACH</a>
          <a help-topic="with">:help WITH</a>
          <a help-topic="load-csv">:help LOAD CSV</a>
          <a help-topic="unwind">:help UNWIND</a>
          <a help-topic="create-index-on">:help CREATE INDEX ON</a>
          <a help-topic="starts-with">:help STARTS WITH</a>
          <a help-topic="ends-with">:help ENDS WITH</a>
          <a help-topic="contains">:help CONTAINS</a>
        </p>
      </div>
      <div className="link">
        <p className="title">Cypher basics guide</p>
        <p className="content">
          <a play-topic="cypher">Play Cypher</a>
        </p>
      </div>
    </div>
    <section className="example">
      <figure>
        <pre>
          {`MATCH <pattern>
WHERE <conditions>
RETURN <expressions>`}
        </pre>
        <figcaption>
          Basic form of a Cypher read statement. (Not executable)
        </figcaption>
      </figure>
    </section>
  </>
)

const footer = (
  <>
    <div className="col-sm-4">
      <h3>Next steps</h3>
      <ul>
        <li>
          <a play-topic="movie-graph">Play movie-graph</a> - Try guides with a
          sample database
        </li>
        <li>
          <a play-topic="start">Play start</a> - Back to getting started
        </li>
      </ul>
    </div>
    <div className="col-sm-4">
      <h3>Documentation</h3>
      <ul className="undecorated">
        <li>
          <ManualLink chapter="cypher-refcard" page="/">
            Cypher Refcard
          </ManualLink>
        </li>
        <li>
          <ManualLink chapter="cypher-manual" page="/">
            The Cypher chapter
          </ManualLink>{' '}
          of the Neo4j Developer Manual
        </li>
      </ul>
    </div>
  </>
)

export default {
  title,
  subtitle,
  category,
  content: null,
  description,
  filter,
  footer
}
