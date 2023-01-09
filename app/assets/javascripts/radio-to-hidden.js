/* eslint-disable no-undef */
/*
* 1. Include this script at the bottom of your page '<script src="/public/javascripts/radio-to-hidden.js"></script>' (just before your {% endblock %} tag)
* 2. Add an <input type="hidden"/> to your form with an 'id' and 'name' which you'd like to save the data to, i.e. <input type="hidden" id="benefit-name" name="benefit-name"/>
* 3. For every <input type="radio"> you'd like to attach a value to give it an attribute of: data-value="Insert value here" i.e. <input type="radio" id="radio-input-2" name="next-page" value="amount.html" data-value="Accommodation expenses"/>
* */
$('input[type=radio]').on('change', function () {
    var dataValue = $(this).attr('data-value')
    $('input[type=hidden]').val(dataValue)
})
