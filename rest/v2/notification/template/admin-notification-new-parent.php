<?php

function getHtmlAdminNotification(
  $html_code,
  $values
) {
  $html =
    '
  <pre style="font-family: sans-serif">' . $html_code . '</pre>
 <table style="margin-bottom: 20px; font-size: 14px; font-family: sans-serif">
              <tr>
                <td
                  style="
                    width: 120px;
                    font-weight: 600;
                    padding-top: 6px;
                  "
                >
                  Client Name:
                </td>
                <td>' . $values["client_name"] . '</td>
              </tr>

              <tr>
                <td
                  style="
                    width: 120px;
                    font-weight: 600;
                    padding-top: 6px;
                  "
                >
                  Timestamp:
                </td>
                <td style="
                    padding-top: 6px;
                          ">
                ' . $values["timestamp"] . '
                </td>
              </tr>
            </table>
  ';
  return $html;
}
