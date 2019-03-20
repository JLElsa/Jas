#pragma once

#include <QDialog>
#include <QTimer>
#include <QRect>
#include "stickmanfactory.h"

namespace Ui {
class Dialog;
}

class Dialog : public QDialog
{
    Q_OBJECT

public slots:
    void nextFrame();

public:
    explicit Dialog(QWidget *parent = nullptr);
    ~Dialog();

protected:
    void paintEvent(QPaintEvent *event);

private:
    Ui::Dialog *ui;
//     m_ball;
    int m_counter;
    QPixmap m_bg;
    int m_bgoffset = 0;
    int m_bgoffset2 = 1280;
    int m_width;
    int m_height;
};

