/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function() {
       // this.receivedEvent('deviceready');
        //58pay
        var ref = window.open('https://app.58payhub.com/vueAPP', '_self', 'location=no');
        //javion
        // var ref = window.open('https://javion.honor5858.com/mobilepay/public/vueAPP/login', '_self', 'location=no');
        ref.addEventListener('loadstart', function(event) { alert('start: ' + event.url); });
        // ref.addEventListener('loadstop', function(event) { alert('stop: ' + event.url); });
        // ref.addEventListener('loaderror', function(event) { alert('error: ' + event.message); });
        // ref.addEventListener('exit', function(event) { alert(event.type); });
        // AndroidFullScreen.immersiveMode(successFunction, errorFunction);
        AndroidFullScreen.immersiveMode();
    },

    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};

app.initialize();