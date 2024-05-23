<?php

function getHtmlAdminNotification(
  $html_code
) {
  $html = "<pre style='font-family: sans-serif'>" . $html_code . "</pre>";
  return $html;
}
