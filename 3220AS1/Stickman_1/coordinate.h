#pragma once

#include <stdlib.h>

class Coordinate
{
public:
    Coordinate(
        unsigned int xCoordinate,
        unsigned int yCoordinate,
        unsigned int frameWidth,
        unsigned int frameHeight):
            m_xCoordinate(xCoordinate),
            m_yCoordinate(yCoordinate),
            m_frameWidth(frameWidth),
            m_frameHeight(frameHeight){}

    int getQtRenderingXCoordinate();

    int getQtRenderingYCoordinate();

    void changeInXCoordinate(int change);

    void changeInYCoordinate(int change);

    void setYCoordinateToZero(int offset);
    void setXCoordinateToZero(int offset);

    unsigned int getFrameHeight();

    unsigned int getFrameWidth();

private:
    unsigned int m_xCoordinate;
    unsigned int m_yCoordinate;
    unsigned int m_frameWidth;
    unsigned int m_frameHeight;
};
