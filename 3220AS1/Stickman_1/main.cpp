#include <QApplication>
#include <iostream>
using namespace std;

#include "Dialog.h"
#include "FileHandler.h"

int main(int argc, char *argv[])
{
    // Read config file
    FileHandler fh;
    QFile file;
    file.setFileName("C:\\Users\\Jasmine\\Downloads\\studying\\3220AS1\\Stickman_1\\json.config");
    QJsonObject items = fh.readFile(file);
    if (items.isEmpty()) {
        qDebug() << "Could not find attributes of the stickman";
        return 0;
    }

    // check the attributes are
    qWarning() << items;
    QString size = items["size"].toString();
    QString color = items["color"].toString();
    QString xCoord = items["xCoord"].toString();
    QString gravity = items["gravity"].toString();
    QJsonArray velocity = items["velocity"].toArray();
    QString bg = items["bg"].toString();
//    stickmanFactory();

    QApplication a(argc, argv);
    Dialog w;
    w.show();

    return a.exec();
}
