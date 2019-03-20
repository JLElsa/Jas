#pragma once


#include <QFile>
#include <QString>
#include <QJsonArray>
#include <QDebug>
#include <QJsonDocument>
#include <QJsonObject>
#include <QJsonValue>

class FileHandler {
public:
    FileHandler() {
    }
    ~FileHandler(){}

    QJsonObject readFile(QFile& file);

    void setItem(QJsonObject item);

private:
    QJsonObject item;
};
