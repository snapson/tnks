function Impedient (type) {
  this.type = type || 'road'; // Set road as default type
  this.size = null;
  this.count = null;
  this.types = null;
}

Impedient.prototype.setValues = function (size, count) {
  this.size = size;
  this.count = count;
  this.fragmentSize = (this.size * 2);
};
Impedient.prototype.setTypes = function (types) {
  this.types = types;
};
Impedient.prototype.getPart = function () {
  var part = $('</div>');
  var that = this;

  part.attr('class', that.type);
  part.css({ width: that.size, height: that.size });

  return part;
};
Impedient.prototype.getFragment = function () {
  var i = 0;
  var part;
  var that = this;
  var fragment = $('<div/>', { class: 'impedient' });

  for (i; i<this.count; i++) {
    part = this.getPart();
    fragment.append(part);
  }

  fragment.css({
    width: that.fragmentSize,
    height: that.fragmentSize,
    left: 0,
    right: 0
  });

  return fragment;
};
Impedient.prototype.setFragments = function (sWidth, sHeight) {
  var that = this;
  var mxHor = Math.round(sWidth/that.fragmentSize);
  var mxVer = Math.round(sHeight/that.fragmentSize);

  // TODO: Create canvas map
}