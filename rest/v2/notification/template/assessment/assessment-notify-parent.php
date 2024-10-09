<?php

function getHtmlAssessmentNotifyParent(
  $html_code,
  $values
) {
  $clientLabel = array_key_exists("client_name", $values) ? "Client Name:" : "";
  $clientValue = array_key_exists("client_name", $values) ? $values["client_name"] : "";

  $primaryValue = array_key_exists("primary", $values) ? $values["primary"] : "";
  $additionalValue = array_key_exists("additional", $values) ? $values["additional"] : "";

  $discountApplied = "No Discount";

  if ($primaryValue == '' && $additionalValue != '') {
    $discountApplied = $additionalValue;
  }

  if ($primaryValue != '' && $additionalValue == '') {
    $discountApplied = $primaryValue;
  }


  if ($primaryValue != '' && $additionalValue != '') {
    $discountApplied = $primaryValue . ', ' . $additionalValue;
  }



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
                    ' . $clientLabel . '
                  </td>
                  <td>' . $clientValue . '</td>
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
                      width: 120px;
                      font-weight: 600;
                      padding-top: 6px;
                    "
                  >
                    Discount applied:
                  </td>
                  <td style="">' . $discountApplied . '</td>
                </tr>
  
                <tr>
                  <td
                    style="
                      wsdth: 120px;
                      font-weight: 600;
                      padding-top: 6px;
                    "
                  >
                    Payment Rate:
                  </td>
                  <td style="">' . $values["payment_rate"] . '</td>
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
