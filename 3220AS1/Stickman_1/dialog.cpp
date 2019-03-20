#include <iostream>
using namespace std;
#include "Dialog.h"
#include "Ui_dialog.h"

#include "Coordinate.h"

Dialog::Dialog(QWidget *parent) :
    QDialog(parent),
    ui(new Ui::Dialog)
{

    ui->setupUi(this);
    m_width = 1280;
    m_height = 720;
    this->resize(m_width, m_height); // w/h
    // draw a background - default
//    m_bg = QPixmap(":/bg1.png");
//    m_bg = m_bg.scaled(this->size(), Qt::KeepAspectRatioByExpanding);

    QTimer *timer = new QTimer(this);
    connect(timer, SIGNAL(timeout()), this, SLOT(nextFrame()));

    timer->start(32);
    this->update();
}

Dialog::~Dialog()
{
    delete ui;
}

void Dialog::nextFrame()
{
    update();
}

void Dialog::paintEvent(QPaintEvent *event)
{

    /* reset the background to the very right side
    after it disappear from the left side
    */
    if (m_bgoffset <= -1280) m_bgoffset = 1280;
    if (m_bgoffset2 <= -1280) m_bgoffset2 = 1280;

    QRectF target(m_bgoffset, 0.0, m_width, m_height);
    m_bgoffset = m_bgoffset-10;
    QRectF source(0.0, 0.0, m_width, m_height);
    QImage image(":/bg1.png");

    QRectF target2(m_bgoffset2, 0.0, m_width, m_height);
    m_bgoffset2 = m_bgoffset2-10;
    QRectF source2(0.0, 0.0, m_width, m_height);
    QImage image2(":/bg1-2.png");

    QPainter painter(this);
    painter.drawImage(target, image, source);
    painter.drawImage(target2, image2, source2);

    // default background
//    QPalette palette;
//    palette.setBrush(QPalette::Background, m_bg);
//    this->setPalette(palette);

    QPen pen;
    pen.setWidth(5);
    pen.setColor(Qt::black);
    QBrush brush(Qt::black);
    painter.setPen (pen);
    painter.setBrush(brush);

    // tiny
    Coordinate coordHead(160, 140, 1280, 720);
    int qtHeadX(coordHead.getQtRenderingXCoordinate());
    int qtHeadY(coordHead.getQtRenderingYCoordinate());

    Coordinate coordBody(160+7, 140-15, 1280, 720);
    int qtBodyX(coordBody.getQtRenderingXCoordinate());
    int qtBodyY(coordBody.getQtRenderingYCoordinate());

    Coordinate coordHand(160+7, 140-15-10, 1280, 720);
    int qtHandX(coordHand.getQtRenderingXCoordinate());
    int qtHandY(coordHand.getQtRenderingYCoordinate());

    // head
    painter.drawEllipse(qtHeadX, qtHeadY, 15, 15);
    // body
    painter.drawLine(qtBodyX, qtBodyY, qtBodyX, qtBodyY+25);
    // left hand
    painter.drawLine(qtHandX, qtHandY, qtHandX-7, qtHandY+7);
    // right hand
    painter.drawLine(qtHandX, qtHandY, qtHandX+7, qtHandY+7);
    // left leg
    painter.drawLine(qtHandX, qtHandY+15, qtHandX-7, qtHandY+7+15);
    // right leg
    painter.drawLine(qtHandX, qtHandY+15, qtHandX+7, qtHandY+7+15);


/*
    // Normal
    Coordinate coordHead(160, 175, 1280, 720);
    int qtHeadX(coordHead.getQtRenderingXCoordinate());
    int qtHeadY(coordHead.getQtRenderingYCoordinate());

    Coordinate coordBody(160+15, 175-30, 1280, 720);
    int qtBodyX(coordBody.getQtRenderingXCoordinate());
    int qtBodyY(coordBody.getQtRenderingYCoordinate());

    Coordinate coordHand(160+15, 175-30-10, 1280, 720);
    int qtHandX(coordHand.getQtRenderingXCoordinate());
    int qtHandY(coordHand.getQtRenderingYCoordinate());

    // head
    painter.drawEllipse(qtHeadX, qtHeadY, 30, 30);
    // body
    painter.drawLine(qtBodyX, qtBodyY, qtBodyX, qtBodyY+40);
    // left hand
    painter.drawLine(qtHandX, qtHandY, qtHandX-15, qtHandY+15);
    // right hand
    painter.drawLine(qtHandX, qtHandY, qtHandX+15, qtHandY+15);
    // left leg
    painter.drawLine(qtHandX, qtHandY+30, qtHandX-15, qtHandY+15+30);
    // right leg
    painter.drawLine(qtHandX, qtHandY+30, qtHandX+15, qtHandY+15+30);

*/

/*
    // Large
    Coordinate coordHead(160, 250, 1280, 720);
    int qtHeadX(coordHead.getQtRenderingXCoordinate());
    int qtHeadY(coordHead.getQtRenderingYCoordinate());

    Coordinate coordBody(160+30, 250-60, 1280, 720);
    int qtBodyX(coordBody.getQtRenderingXCoordinate());
    int qtBodyY(coordBody.getQtRenderingYCoordinate());

    Coordinate coordHand(160+30, 250-60-10, 1280, 720);
    int qtHandX(coordHand.getQtRenderingXCoordinate());
    int qtHandY(coordHand.getQtRenderingYCoordinate());

    // head
    painter.drawEllipse(qtHeadX, qtHeadY, 60, 60);
    // body
    painter.drawLine(qtBodyX, qtBodyY, qtBodyX, qtBodyY+70);
    // left hand
    painter.drawLine(qtHandX, qtHandY, qtHandX-30, qtHandY+30);
    // right hand
    painter.drawLine(qtHandX, qtHandY, qtHandX+30, qtHandY+30);
    // left leg
    painter.drawLine(qtHandX, qtHandY+60, qtHandX-30, qtHandY+30+60);
    // right leg
    painter.drawLine(qtHandX, qtHandY+60, qtHandX+30, qtHandY+30+60);

*/

/*
    // Giant
    Coordinate coordHead(160, 330, 1280, 720);
    int qtHeadX(coordHead.getQtRenderingXCoordinate());
    int qtHeadY(coordHead.getQtRenderingYCoordinate());

    Coordinate coordBody(160+45, 330-90, 1280, 720);
    int qtBodyX(coordBody.getQtRenderingXCoordinate());
    int qtBodyY(coordBody.getQtRenderingYCoordinate());

    Coordinate coordHand(160+45, 330-90-10, 1280, 720);
    int qtHandX(coordHand.getQtRenderingXCoordinate());
    int qtHandY(coordHand.getQtRenderingYCoordinate());

    // head
    painter.drawEllipse(qtHeadX, qtHeadY, 90, 90);
    // body
    painter.drawLine(qtBodyX, qtBodyY, qtBodyX, qtBodyY+100);
    // left hand
    painter.drawLine(qtHandX, qtHandY, qtHandX-45, qtHandY+45);
    // right hand
    painter.drawLine(qtHandX, qtHandY, qtHandX+45, qtHandY+45);
    // left leg
    painter.drawLine(qtHandX, qtHandY+90, qtHandX-45, qtHandY+45+90);
    // right leg
    painter.drawLine(qtHandX, qtHandY+90, qtHandX+45, qtHandY+45+90);
*/
}
