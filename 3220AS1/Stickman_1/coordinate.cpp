#include "Coordinate.h"

int Coordinate::getQtRenderingXCoordinate() {
    return (int)m_xCoordinate;
}
int Coordinate::getQtRenderingYCoordinate() {
    return (int)(m_frameHeight - m_yCoordinate);
}

void Coordinate::changeInXCoordinate(int change) {
    m_xCoordinate += change;
}

void Coordinate::changeInYCoordinate(int change) {
    m_yCoordinate += change;
}

void Coordinate::setYCoordinateToZero(int offset) {
//    if (offset >= 0) { //since it's unsigned int and int, we make sure that only positive >=0 will be signed
        m_yCoordinate = offset;
//    }
}

void Coordinate::setXCoordinateToZero(int offset) {
//    if (offset >= 0) { //since it's unsigned int and int, we make sure that only positive >=0 will be signed
        m_xCoordinate = offset;
//    }
}

unsigned int Coordinate::getFrameHeight() {
    return m_frameHeight;
}

unsigned int Coordinate::getFrameWidth() {
    return m_frameWidth;
}
