import toastr from 'toastr';

export function successToast(text: string) {
  toastr.success('Saved successfully', null, toastr.options = {
    "closeButton": true,
    "newestOnTop": true,
    "positionClass": "toast-top-center",
    "showDuration": "200",
    "hideDuration": "300",
    "timeOut": "1500",
    "extendedTimeOut": "1000",
    "showEasing": "swing",
    "hideEasing": "linear",
    "showMethod": "fadeIn",
    "hideMethod": "fadeOut"
  })
}

export function errorToast(text: string) {
  toastr.error(text, null, toastr.options = {
    "closeButton": true,
    "newestOnTop": true,
    "positionClass": "toast-top-center",
    "showDuration": "300",
    "hideDuration": "500",
    "timeOut": "5000",
    "extendedTimeOut": "1000",
    "showEasing": "swing",
    "hideEasing": "linear",
    "showMethod": "fadeIn",
    "hideMethod": "fadeOut"
  })
}
