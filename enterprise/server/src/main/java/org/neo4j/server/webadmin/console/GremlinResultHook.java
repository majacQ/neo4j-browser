/**
 * Copyright (c) 2002-2011 "Neo Technology,"
 * Network Engine for Objects in Lund AB [http://neotechnology.com]
 *
 * This file is part of Neo4j.
 *
 * Neo4j is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 */
package org.neo4j.server.webadmin.console;

import groovy.lang.Closure;

import java.util.Iterator;
import java.util.Map;

import org.codehaus.groovy.tools.shell.IO;

import com.tinkerpop.gremlin.console.ArrayIterator;
import com.tinkerpop.pipes.SingleIterator;

/**
 * Version of ResultHookClosure that does not add ==> to the output. This is
 * instead moved to the console or print stream to handle, so that all content
 * printed to the output stream gets the same prompt.
 * 
 * @author Marko A. Rodriguez (http://markorodriguez.com), Jacob Hansson
 *         <jacob@voltvoodoo.com>
 */
public class GremlinResultHook extends Closure
{
    /**
     * 
     */
    private static final long serialVersionUID = -8258126015903649440L;
    private final IO io;

    public GremlinResultHook( final Object owner, final IO io )
    {
        super( owner );
        this.io = io;
    }

    @SuppressWarnings( "rawtypes" )
    public Object call( final Object[] args )
    {
        Object result = args[0];
        Iterator itty;
        if ( result instanceof Iterator )
        {
            itty = (Iterator) result;
        }
        else if ( result instanceof Iterable )
        {
            itty = ( (Iterable) result ).iterator();
        }
        else if ( result instanceof Object[] )
        {
            itty = new ArrayIterator( (Object[]) result );
        }
        else if ( result instanceof Map )
        {
            itty = ( (Map) result ).entrySet().iterator();
        }
        else
        {
            itty = new SingleIterator<Object>( result );
        }

        while ( itty.hasNext() )
        {
            this.io.out.println( itty.next() );
        }

        return null;
    }
}
