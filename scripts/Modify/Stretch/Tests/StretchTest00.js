/**
 * Copyright (c) 2011-2013 by Andrew Mustun. All rights reserved.
 * 
 * This file is part of the QCAD project.
 *
 * QCAD is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * QCAD is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with QCAD.
 */
// Auto generated by Testing Dashboard
// File        : scripts/Modify/Stretch/Tests/StretchTest00.js
// Timestamp   : 2011-08-15 16:48:32
// Description : 

include('scripts/Pro/Developer/TestingDashboard/TdbTest.js');

function StretchTest00() {
    TdbTest.call(this, 'scripts/Modify/Stretch/Tests/StretchTest00.js');
}

StretchTest00.prototype = new TdbTest();

StretchTest00.prototype.test00 = function() {
    qDebug('running StretchTest00.test00()...');
    this.setUp();
    var w = objectFromPath('MainWindow::CadToolsDock::CadToolBar::MainToolsPanel');
    this.sendMouseEvent(w, QEvent.MouseButtonPress, new QPoint(53, 455), Qt.LeftButton, 1, 0);
    var w = objectFromPath('MainWindow::CadToolsDock::CadToolBar::MainToolsPanel');
    this.sendMouseEvent(w, QEvent.MouseButtonRelease, new QPoint(53, 455), Qt.LeftButton, 0, 0);
    this.importFile('scripts/Modify/Stretch/Tests/data/entities0.dxf');
    var p = new RVector(40.969671, 25.048477);
    this.sendMouseEventModelPos(QEvent.MouseButtonPress, p, Qt.MidButton, 4, 0);
    this.sendMouseEventModelPos(QEvent.MouseButtonRelease, p, Qt.MidButton, 0, 0);
    this.triggerCommand('stretch');
    this.setZoom(5.578512396694214, new RVector(11.0155, 11.5204, 0) );
    var p = new RVector(-5.099959, 39.389218);
    this.sendMouseEventModelPos(QEvent.MouseButtonPress, p, Qt.LeftButton, 1, 0);
    this.sendMouseEventModelPos(QEvent.MouseButtonRelease, p, Qt.LeftButton, 0, 0);
    this.setZoom(5.578512396694214, new RVector(11.0155, 11.5204, 0) );
    var p = new RVector(66.783004, 8.018848);
    this.sendMouseEventModelPos(QEvent.MouseButtonPress, p, Qt.LeftButton, 1, 0);
    this.sendMouseEventModelPos(QEvent.MouseButtonRelease, p, Qt.LeftButton, 0, 0);
    this.setZoom(5.578512396694214, new RVector(11.0155, 11.5204, 0) );
    var p = new RVector(69.651152, 40.285514);
    this.sendMouseEventModelPos(QEvent.MouseButtonPress, p, Qt.LeftButton, 1, 0);
    this.sendMouseEventModelPos(QEvent.MouseButtonRelease, p, Qt.LeftButton, 0, 0);
    this.setZoom(5.578512396694214, new RVector(11.0155, 11.5204, 0) );
    var p = new RVector(60.150412, 50.324033);
    this.sendMouseEventModelPos(QEvent.MouseButtonPress, p, Qt.LeftButton, 1, 0);
    this.sendMouseEventModelPos(QEvent.MouseButtonRelease, p, Qt.LeftButton, 0, 0);
    this.verifyDrawing('StretchTest00_000.dxf');
    this.tearDown();
    qDebug('finished StretchTest00.test00()');
};

