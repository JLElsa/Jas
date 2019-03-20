#include "FileHandler.h"

void FileHandler::setItem(QJsonObject item) {
    this->item = item;
}


QJsonObject FileHandler::readFile(QFile& file){
    // Read config file
    QString contents;
    if (!file.open(QIODevice::ReadOnly | QIODevice::Text)) {
        qDebug() << "Could not find file";
        return *new QJsonObject();
    }
    contents = file.readAll();
    file.close();

    // Check if stickman attributes exist
    if (contents.isNull() || contents.isEmpty()) {
        qDebug() << "Stickman attributs are not specified";
        return *new QJsonObject();
    }

    // Put stickman into json doc.
    QJsonDocument jdoc = QJsonDocument::fromJson(contents.toUtf8());
    if (jdoc.isNull() || jdoc.isEmpty()) {
        qDebug() << "Fail to create json doc.";
        return *new QJsonObject();
    }

    // Getting a specific stickman from stickmen
    QJsonObject jobj = jdoc.object();
    QJsonValue value = jobj.value(QString("stickman1"));
    setItem(value.toObject());
    // check if stickman_n exists
//    qWarning() << item;
    if (!item.isEmpty()) {
        return item;
    }
    return *new QJsonObject();
}
