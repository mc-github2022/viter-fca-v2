<?php

function getHtmlAdminNotificationReEnrollStudent(
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
                Student Name:
              </td>
              <td style="">' . $values["student_name"] . '</td>
            </tr>

            <tr>
              <td
                style="
                  wsdth: 120px;
                  font-weight: 600;
                  padding-top: 6px;
                "
              >
                Grade Level:
              </td>
              <td style="">' . $values["grade_level"] . '</td>
            </tr>

            <tr>
              <td
                style="
                  width: 120px;
                  font-weight: 600;
                  padding-top: 6px;
                "
              >
                School Year:
              </td>
              <td style="">' . $values["sy"] . '</td>
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
