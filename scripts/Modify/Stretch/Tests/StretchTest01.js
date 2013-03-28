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
// File        : scripts/Modify/Stretch/Tests/StretchTest01.js
// Timestamp   : 2011-08-15 17:09:11
// Description : 

include('scripts/Pro/Developer/TestingDashboard/TdbTest.js');

function StretchTest01() {
    TdbTest.call(this, 'scripts/Modify/Stretch/Tests/StretchTest01.js');
}

StretchTest01.prototype = new TdbTest();

StretchTest01.prototype.test00 = function() {
    qDebug('running StretchTest01.test00()...');
    this.setUp();
    var w = objectFromPath('MainWindow::CadToolsDock::CadToolBar::MainToolsPanel');
    this.sendMouseEvent(w, QEvent.MouseButtonPress, new QPoint(47, 446), Qt.LeftButton, 1, 0);
    var w = objectFromPath('MainWindow::CadToolsDock::CadToolBar::MainToolsPanel');
    this.sendMouseEvent(w, QEvent.MouseButtonRelease, new QPoint(47, 446), Qt.LeftButton, 0, 0);
    this.importFile('scripts/Modify/Stretch/Tests/data/entities1.dxf');
    var p = new RVector(41.165819, 15.556123);
    this.sendMouseEventModelPos(QEvent.MouseButtonPress, p, Qt.MidButton, 4, 0);
    this.sendMouseEventModelPos(QEvent.MouseButtonRelease, p, Qt.MidButton, 0, 0);
    this.triggerCommand('stretch');
    this.setZoom(5.56930693069307, new RVector(5.51863, 9.22254, 0) );
    var p = new RVector(-2.825292, 33.332123);
    this.sendMouseEventModelPos(QEvent.MouseButtonPress, p, Qt.LeftButton, 1, 0);
    this.sendMouseEventModelPos(QEvent.MouseButtonRelease, p, Qt.LeftButton, 0, 0);
    this.setZoom(5.56930693069307, new RVector(5.51863, 9.22254, 0) );
    var p = new RVector(53.734708, 13.221901);
    this.sendMouseEventModelPos(QEvent.MouseButtonPress, p, Qt.LeftButton, 1, 0);
    this.sendMouseEventModelPos(QEvent.MouseButtonRelease, p, Qt.LeftButton, 0, 0);
    this.setZoom(5.56930693069307, new RVector(5.51863, 9.22254, 0) );
    var p = new RVector(29.853819, 40.155235);
    this.sendMouseEventModelPos(QEvent.MouseButtonPress, p, Qt.LeftButton, 1, 0);
    this.sendMouseEventModelPos(QEvent.MouseButtonRelease, p, Qt.LeftButton, 0, 0);
    this.setZoom(5.56930693069307, new RVector(5.51863, 9.22254, 0) );
    var p = new RVector(39.90893, 49.312568);
    this.sendMouseEventModelPos(QEvent.MouseButtonPress, p, Qt.LeftButton, 1, 0);
    this.sendMouseEventModelPos(QEvent.MouseButtonRelease, p, Qt.LeftButton, 0, 0);
    this.verifyDrawing('StretchTest01_000.dxf');
    this.tearDown();
    qDebug('finished StretchTest01.test00()');
};

