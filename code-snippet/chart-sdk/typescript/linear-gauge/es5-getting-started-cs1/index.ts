

<!DOCTYPE html>
  <html xmlns="http://www.w3.org/1999/xhtml">
       <head>
    <script src="https://cdn.syncfusion.com/ej2/syncfusion-helper.js"></script>
            <title>Essential JS 2</title>

            <!-- Essential JS 2 Base's global script (Dependency Script) -->
            <script src="https://cdn.syncfusion.com/ej2/ej2-base/dist/global/ej2-base.min.js" type="text/javascript"></script>

            <!-- Essential JS 2 lineargauge's global script (Control Script) -->
            <script src="https://cdn.syncfusion.com/ej2/ej2-lineargauge/dist/global/ej2-lineargauge.min.js" type="text/javascript"></script>

       </head>
       <body>
           <!-- Add the HTML <lineargauge> element  -->
            <div id="element">Linear Gauge</div>
            <script>
                ej.base.enableRipple(true);
                // initialize lineargauge control
                var lineargauge = new ej.lineargauge.LinearGauge();
                // Render initialized lineargauge.
                lineargauge.appendTo('#element');
            </script>
       </body>
  </html>


