var http = require('http');
var fs = require('fs')
http.createServer(function(request, response) {
    console.log(request.url);
    var ext = request.url.substring(request.url.lastIndexOf(".") + 1, request.url.length);
    var contentTypes = {
        'text/html': 'html,htm,shtm',
        'text/css': 'css',
        'text/xml': 'xml',
        'image/gif': 'gif',
        'image/jpeg': 'jpeg,jpg',
        'application/x-javascript': 'js',
        'application/atom+xml': 'atom',
        'application/rss+xml': 'rss',
        'text/mathml': 'mml',
        'text/plain': 'txt',
        'text/vnd.sun.j2me.app-descriptor': 'jad',
        'text/vnd.wap.wml': 'wml',
        'text/x-component': 'htc',
        'image/png': 'png',
        'image/tiff': 'tif,tiff',
        'image/vnd.wap.wbmp': 'wbmp',
        'image/x-icon': 'ico',
        'image/x-jng': 'jng',
        'image/x-ms-bmp': 'bmp',
        'image/svg+xml': 'svg,svgz',
        'image/webp': 'webp',
        'application/java-archive': 'jar,war,ear',
        'application/mac-binhex40': 'hqx',
        'application/msword': 'doc',
        'application/pdf': 'pdf',
        'application/postscript': 'ps,eps,ai',
        'application/rtf': 'rtf',
        'application/vnd.ms-excel': 'xls',
        'application/vnd.ms-powerpoint': 'ppt',
        'application/vnd.wap.wmlc': 'wmlc',
        'application/vnd.google-earth.kml+xml': 'kml',
        'application/vnd.google-earth.kmz': 'kmz',
        'application/x-7z-compressed': '7z',
        'application/x-cocoa': 'cco',
        'application/x-java-archive-diff': 'jardiff',
        'application/x-java-jnlp-file': 'jnlp',
        'application/x-makeself': 'run',
        'application/x-perl': 'pl,pm',
        'application/x-pilot': 'prc,pdb',
        'application/x-rar-compressed': 'rar',
        'application/x-redhat-package-manager': 'rpm',
        'application/x-sea': 'sea',
        'application/x-shockwave-flash': 'swf',
        'application/x-stuffit': 'sit',
        'application/x-tcl': 'tcl,tk',
        'application/x-x509-ca-cert': 'der,pem,crt',
        'application/x-xpinstall': 'xpi',
        'application/xhtml+xml': 'xhtml',
        'application/zip': 'zip',
        'application/octet-stream': 'bin,exe,dll,deb,dmg,eot,iso,img,msi,msp,msm',
        'audio/midi': 'mid,midi,kar',
        'audio/mpeg': 'mp3',
        'audio/ogg': 'ogg',
        'audio/x-m4a': 'm4a',
        'audio/x-realaudio': 'ra',
        'video/3gpp': '3gpp,3gp',
        'video/mp4': 'mp4',
        'video/mpeg': 'mpeg,mpg',
        'video/quicktime': 'mov',
        'video/webm': 'webm',
        'video/x-flv': 'flv',
        'video/x-m4v': 'm4v',
        'video/x-mng': 'mng',
        'video/x-ms-asf': 'asx,asf',
        'video/x-ms-wmv': 'wmv',
        'video/x-msideo': 'avi'
    }

    try {
        (function() {
            for (var n in contentTypes) {
                var type = contentTypes[n].split(',');
                for (var i in type) {
                    if (type[i] === ext) {
                        contentType = n
                        return
                    }
                }
            }
        })()

        response.writeHead(200, {
            'Content-Type': contentType
        });
        var index = ['index.html', 'index.htm', 'default.html', 'default.htm']
        for(var j = 0;j<index.length;j++){
          if(index[j] === '/' || index[j] === ''){
            
          }
        }

        response.end(fs.readFileSync(request.url.substring(1, request.url.length)));
    } catch (e) {
        response.writeHead(404);
        response.end('404');
    }


}).listen(80);
