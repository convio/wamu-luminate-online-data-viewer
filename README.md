WAMU Luminate Online Data Viewer
===========================

A fork of the [Luminate Online Data Viewer](https://github.com/convio/luminate-online-data-viewer) for WAMU.

About
--------

The Luminate Online Data Viewer allows organizations to gain insight into the performance of 
their online marketing campaigns with up-to-the-minute reporting using 
[Luminate Online Web Services](http://open.convio.com/webservices/).

Download
--------

The Data Viewer is available for 32- and 64-bit Windows and Mac.

[Windows (32-bit)](https://github.com/convio/wamu-luminate-online-data-viewer/raw/master/downloads/win32.zip)  
[Windows (64-bit)](https://github.com/convio/wamu-luminate-online-data-viewer/raw/master/downloads/win64.zip)  
[Mac](https://github.com/convio/wamu-luminate-online-data-viewer/raw/master/downloads/osx64.zip)

Logging In
----------

Each time you use the app, you'll need to login to Luminate Online Web Services.

To login, you'll need a few pieces of information:

* The Web Services URL for your organization. This should look something like `https://webservices.cluster2.convio.net/1.0/myorg`. You can find this URL in the Luminate Online administrative interface under Setup -> Site Options. Click the Open API Configuration tab and scroll down to the "Configure Luminate Online WebServices" section.
* The username and password for an API Administrator account. On the same Open API Configuration tab, click the "Edit server API configuration" link next to "Configure API to allow server access". Under "Manage API Administrative Accounts", use one of the existing accounts created for your organization or create a new one.

For added security, the IP address you login from must be whitelisted to use Luminate Online Web Services. On the Open API Configuration screen, you can manage the IP whitelist by clicking "Edit WebService configuration" next to "Configure Luminate Online WebServices".