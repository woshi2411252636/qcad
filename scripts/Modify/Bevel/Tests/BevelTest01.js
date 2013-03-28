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
// File        : scripts/Modify/Bevel/Tests/BevelTest01.js
// Timestamp   : 2011-07-27 15:06:32
// Description : 

include('scripts/Pro/Developer/TestingDashboard/TdbTest.js');

function BevelTest01() {
    TdbTest.call(this, 'scripts/Modify/Bevel/Tests/BevelTest01.js');
}

BevelTest01.prototype = new TdbTest();

BevelTest01.prototype.test00 = function() {
    qDebug('running BevelTest01.test00()...');
    this.setUp();
    this.importFile('scripts/Modify/Bevel/Tests/data/2lines.dxf');
    TdbTest.clickOnWidget('MainWindow::CadToolsDock::CadToolBar::MainToolsPanel::ModifyMenuButton');
    TdbTest.clickOnWidget('MainWindow::CadToolsDock::CadToolBar::ModifyToolsPanel::BevelButton');
    this.setToolOption('Bevel/Trim', 'true');
    this.setToolOption('Bevel/Length1',  [ 5, 0 ] );
    this.setToolOption('Bevel/Length2',  [ 18, 0 ] );
    this.updateToolOptions();
    this.setZoom(17.574468085106382, new RVector(-6.71368, -6.18099, 0) );
    var p = new RVector(23.442494, 10.505448);
    this.sendMouseEventModelPos(QEvent.MouseButtonPress, p, Qt.LeftButton, 1, 0);
    this.sendMouseEventModelPos(QEvent.MouseButtonRelease, p, Qt.LeftButton, 0, 0);
    this.setZoom(17.574468085106382, new RVector(-6.71368, -6.18099, 0) );
    var p = new RVector(25.547821, 22.056295);
    this.sendMouseEventModelPos(QEvent.MouseButtonPress, p, Qt.LeftButton, 1, 0);
    this.sendMouseEventModelPos(QEvent.MouseButtonRelease, p, Qt.LeftButton, 0, 0);
    var p = new RVector(18.662833, 16.764528);
    this.sendMouseEventModelPos(QEvent.MouseButtonPress, p, Qt.RightButton, 2, 0);
    this.sendMouseEventModelPos(QEvent.MouseButtonRelease, p, Qt.RightButton, 0, 0);
    this.verifyDrawing('BevelTest01_000.dxf');
    this.tearDown();
    qDebug('finished BevelTest01.test00()');
};

