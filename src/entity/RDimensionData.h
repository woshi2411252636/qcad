/**
 * Copyright (c) 2011-2018 by Andrew Mustun. All rights reserved.
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

#ifndef RDIMENSIONDATA_H
#define RDIMENSIONDATA_H

#include "entity_global.h"

#include "RDocument.h"
#include "REntityData.h"
#include "RTextData.h"
#include "RVector.h"

/**
 * Base class for dimension entity data classes.
 *
 * \scriptable
 * \ingroup entity
 *
 * \todo explodable interface that returns list of REntityData, maybe base class RComposedEntityData?
 */
class QCADENTITY_EXPORT RDimensionData: public REntityData {
    friend class RDimensionEntity;

protected:
    RDimensionData(RDocument* document, const RDimensionData& data);

public:
    RDimensionData(RDocument* document = NULL);
    RDimensionData(const RVector& definitionPoint,
                   const RVector& textPositionCenter,
                   RS::VAlign valign,
                   RS::HAlign halign,
                   RS::TextLineSpacingStyle lineSpacingStyle,
                   double lineSpacingFactor,
                   const QString& text,
                   const QString& fontName,
                   double textAngle);

    virtual RS::EntityType getType() const {
        return RS::EntityDimension;
    }
    virtual RBox getBoundingBox(bool ignoreEmpty=false) const;

    void render() const;

    void updateBoundingBox(const RBox& box) const {
        boundingBox = box;
    }
    void updateTextPositionCenter(const RVector& p) const {
        textPositionCenter = p;
    }
    void updateTextPositionSide(const RVector& p) const {
        textPositionSide = p;
    }
    void updateTextData(const RTextData& d) const {
        textData = d;
    }
    void updateShapes(const QList<QSharedPointer<RShape> >& s) const {
        shapes = s;
    }
    void updateArrowPos1(const RVector& p) const {
        arrow1Pos = p;
    }
    void updateArrowPos2(const RVector& p) const {
        arrow2Pos = p;
    }

    virtual QList<QSharedPointer<RShape> > getShapes(const RBox& queryBox = RDEFAULT_RBOX, bool ignoreComplex = false, bool segment = false, QList<RObject::Id>* entityIds = NULL) const {
        return shapes;
    }

    virtual RVector getPointOnEntity() const;

    virtual bool isValid() const;
    virtual bool isSane() const;

    virtual void setDefinitionPoint(const RVector& p) {
        definitionPoint = p;
        update();
    }

    RVector getDefinitionPoint() const {
        return definitionPoint;
    }

    void setText(const QString& t) {
        text = t;
        update();
    }

    QString getText() const {
        return text;
    }

    void setUpperTolerance(const QString& t) {
        upperTolerance = t;
        update();
    }

    void setLowerTolerance(const QString& t) {
        lowerTolerance = t;
        update();
    }


    void setTextPosition(const RVector& p) {
        if (p.isSane()) {
            textPositionCenter = p;
        }
        textPositionSide = RVector::invalid;
        update();
    }

    //virtual RVector getTextPosition() const = 0;

    virtual RVector getTextPosition() const {
        if (textPositionSide.isValid()) {
            return textPositionSide;
        }
        else {
            return textPositionCenter;
        }
    }

    void setFontName(const QString& fn) {
        fontName = fn;
        update();
    }

    QString getFontName() const {
        return fontName;
    }

//    void setTextColor(const RColor& tc) {
//        textColor = tc;
//        update();
//    }

//    RColor getTextColor() const {
//        return textColor;
//    }

    void setDimBlockName(const QString& bn) {
        dimBlockName = bn;
        //update();
    }

    QString getDimBlockName() const {
        return dimBlockName;
    }

    double getLinearFactor() const {
        return linearFactor;
    }

    void setLinearFactor(double f) {
        linearFactor = f;
    }

    double getDimScale(bool fromDocument=true) const;

    void setDimScale(double f) {
        dimScaleOverride = f;
        update();
    }

    bool isArrow1Flipped() const {
        return arrow1Flipped;
    }
    void setArrow1Flipped(bool on) {
        arrow1Flipped = on;
    }
    bool isArrow2Flipped() const {
        return arrow2Flipped;
    }
    void setArrow2Flipped(bool on) {
        arrow2Flipped = on;
    }

    bool isExtLineFix() const {
        return extLineFix;
    }
    void setExtLineFix(bool on) {
        extLineFix = on;
    }

    double getExtLineFixLength() const {
        return extLineFixLength;
    }
    void setExtLineFixLength(double v) {
        extLineFixLength = v;
    }

    void adjustExtensionLineFixLength(RLine& extLine1, RLine& extLine2, bool addDimExe = true) const;

    bool hasSpaceForArrows() const;

    virtual double getDistanceTo(const RVector& point, bool limited = true, double range = 0.0, bool draft = false, double strictRange = RMAXDOUBLE) const;
    virtual bool intersectsWith(const RShape& shape) const;

    virtual QList<RRefPoint> getReferencePoints(RS::ProjectionRenderingHint hint = RS::RenderTop) const;

    virtual bool clickReferencePoint(const RVector& referencePoint);
    virtual bool moveReferencePoint(const RVector& referencePoint, const RVector& targetPoint, Qt::KeyboardModifiers modifiers = Qt::NoModifier);

    virtual bool move(const RVector& offset);
    virtual bool rotate(double rotation, const RVector& center);
    virtual bool scale(const RVector& scaleFactors, const RVector& center);
    virtual void scaleVisualProperties(double scaleFactor);
    virtual bool mirror(const RLine& axis);

    double getDimexo() const;
    double getDimexe() const;
    double getDimasz() const;
    double getDimgap() const;
    double getDimtxt() const;
    void setDimtxt(double t) {
        dimtxtOverride = t;
        update();
    }
    int getDimlunit() const;
    void setDimlunit(int l) {
        dimlunitOverride = l;
        update();
    }
    int getDimjust() const;
    int getDimtad() const;
    int getDimtih() const;
    bool useArchTick() const;
    bool hasCustomTextPosition() const;
    void setCustomTextPosition(bool on);

    RS::TextLineSpacingStyle getLineSpacingStyle() const {
        return lineSpacingStyle;
    }

    double getLineSpacingFactor() const {
        return lineSpacingFactor;
    }

    double getTextAngle() const {
        return textAngle;
    }

//    QList<QSharedPointer<RShape> > getDimensionLineShapes(
//        const RVector& p1, const RVector& p2,
//        bool arrow1, bool arrow2) const;
    virtual QList<QSharedPointer<RShape> > getArrow(
        const RVector& position, double direction) const;
    RTextData& getTextData(bool noRender = false) const;
    RTextData& initTextData() const;
    //virtual void updateTextData() const;
    virtual QString getMeasurement(bool resolveAutoMeasurement = true) const;
    virtual double getMeasuredValue() const { return 0.0; }
    virtual QString getAutoLabel() const { return ""; }
    QString formatLabel(double distance) const;
    QString formatAngleLabel(double textAngle) const;
    //virtual void updateFromTextPosition() = 0;

    virtual void update() const;

    QSharedPointer<RBlockReferenceEntity> getDimensionBlockReference() const;
    bool hasDimensionBlockReference() const;

protected:
    /** Definition point */
    mutable RVector definitionPoint;
    /** Middle point of dimension text */
    mutable RVector textPositionCenter;
    /**
     * Middle point of dimension text when automatically moved to
     * the side for lack of space
     */
    mutable RVector textPositionSide;
    /** Vertical alignment */
    RS::VAlign valign;
    /** Horizontal alignment */
    RS::HAlign halign;
    /** Line spacing style */
    RS::TextLineSpacingStyle lineSpacingStyle;
    /** Line spacing factor */
    double lineSpacingFactor;
    /**
     * Text string entered explicitly by user or null
     * or "<>" for the actual measurement or " " (one blank space)
     * for suppressing the text.
     */
    QString text;
    /** Upper tolerance limit */
    QString upperTolerance;
    /** Lower tolerance limit */
    QString lowerTolerance;
    /** Dimension font name */
    QString fontName;
    /** Dimension text color */
    //RColor textColor;
    /** Dimension appearance is defined in this block */
    mutable QString dimBlockName;

    mutable double defaultAngle;
    /** Rotation angle of dimension text away from default orientation */
    double textAngle;

    double linearFactor;
    double dimScaleOverride;
    double dimtxtOverride;
    int dimlunitOverride;
    bool arrow1Flipped;
    bool arrow2Flipped;

    bool extLineFix;
    double extLineFixLength;

    mutable bool dirty;
    mutable RTextData textData;
    mutable RBox boundingBox;

    mutable double dimLineLength;
    mutable RVector arrow1Pos;
    mutable RVector arrow2Pos;

    /** True if the textPosition should be automatically calculated. */
    mutable bool autoTextPos;

    mutable QList<QSharedPointer<RShape> > shapes;
};

Q_DECLARE_METATYPE(RDimensionData*)
Q_DECLARE_METATYPE(const RDimensionData*)
Q_DECLARE_METATYPE(QSharedPointer<RDimensionData>)

#endif
