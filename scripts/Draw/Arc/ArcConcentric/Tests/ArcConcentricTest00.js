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
// File        : scripts/Draw/Arc/ArcConcentric/Tests/ArcConcentricTest00.js
// Timestamp   : 2011-03-01 11:05:48
// Description : 3 concentric arcs on the inside, 3 concentric arcs on the outside of an arc

include('scripts/Pro/Developer/TestingDashboard/TdbTest.js');

function ArcConcentricTest00() {
    TdbTest.call(this, 'scripts/Draw/Arc/ArcConcentric/Tests/ArcConcentricTest00.js');
}

ArcConcentricTest00.prototype = new TdbTest();

ArcConcentricTest00.prototype.test00 = function() {
    qDebug('running ArcConcentricTest00.test00()...');
    this.setUp();
    this.clickOnWidget('MainWindow::MainToolsPanel::ArcMenuButton');
    this.clickOnWidget('MainWindow::ArcToolsPanel::Arc3PButton');
    this.setZoom(10, new RVector(5, 5, 0) );
    var p = new RVector(10, 10.1);
    this.sendMouseEventModelPos(QEvent.MouseButtonPress, p, Qt.LeftButton, 1, 0);
    var p = new RVector(10, 10.1);
    this.sendMouseEventModelPos(QEvent.MouseButtonRelease, p, Qt.LeftButton, 0, 0);
    this.setZoom(10, new RVector(5, 5, 0) );
    var p = new RVector(20.1, 19.8);
    this.sendMouseEventModelPos(QEvent.MouseButtonPress, p, Qt.LeftButton, 1, 0);
    var p = new RVector(20.1, 19.8);
    this.sendMouseEventModelPos(QEvent.MouseButtonRelease, p, Qt.LeftButton, 0, 0);
    this.setZoom(10, new RVector(5, 5, 0) );
    var p = new RVector(30, 10.2);
    this.sendMouseEventModelPos(QEvent.MouseButtonPress, p, Qt.LeftButton, 1, 0);
    var p = new RVector(30, 10.2);
    this.sendMouseEventModelPos(QEvent.MouseButtonRelease, p, Qt.LeftButton, 0, 0);
    var p = new RVector(3.5, 28.6);
    this.sendMouseEventModelPos(QEvent.MouseButtonPress, p, Qt.RightButton, 2, 0);
    var p = new RVector(3.5, 28.6);
    this.sendMouseEventModelPos(QEvent.MouseButtonRelease, p, Qt.RightButton, 0, 0);
    this.clickOnWidget('MainWindow::MainToolsPanel::ArcMenuButton');
    this.clickOnWidget('MainWindow::ArcToolsPanel::ArcConcentricButton');
    this.setToolOption('ArcConcentric/Distance',  [ 1, 0 ] );
    this.setToolOption('ArcConcentric/Number', '2');
    this.updateToolOptions();
    this.setZoom(10, new RVector(5, 5, 0) );
    var p = new RVector(26.6, 17.1);
    this.sendMouseEventModelPos(QEvent.MouseButtonPress, p, Qt.LeftButton, 1, 0);
    var p = new RVector(26.6, 17.1);
    this.sendMouseEventModelPos(QEvent.MouseButtonRelease, p, Qt.LeftButton, 0, 0);
    this.setToolOption('ArcConcentric/Distance',  [ 2, 0 ] );
    this.setToolOption('ArcConcentric/Number', '3');
    this.updateToolOptions();
    this.setZoom(10, new RVector(5, 5, 0) );
    var p = new RVector(25.5, 19.2);
    this.sendMouseEventModelPos(QEvent.MouseButtonPress, p, Qt.LeftButton, 1, 0);
    var p = new RVector(25.5, 19.2);
    this.sendMouseEventModelPos(QEvent.MouseButtonRelease, p, Qt.LeftButton, 0, 0);
    var p = new RVector(40.7, 0.8);
    this.sendMouseEventModelPos(QEvent.MouseButtonPress, p, Qt.RightButton, 2, 0);
    var p = new RVector(40.7, 0.8);
    this.sendMouseEventModelPos(QEvent.MouseButtonRelease, p, Qt.RightButton, 0, 0);
    var p = new RVector(38.2, 1.6);
    this.sendMouseEventModelPos(QEvent.MouseButtonPress, p, Qt.RightButton, 2, 0);
    var p = new RVector(38.2, 1.6);
    this.sendMouseEventModelPos(QEvent.MouseButtonRelease, p, Qt.RightButton, 0, 0);
    this.verifyDrawing('ArcConcentricTest00_000.dxf');
    this.tearDown();
    qDebug('finished ArcConcentricTest00.test00()');
};

