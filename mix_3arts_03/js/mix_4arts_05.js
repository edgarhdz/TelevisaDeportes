$(document).ready(function(){
	/**
	 * @desc make the separator line as high as the higher div that it is separating
	 * @todo shouldn't the separator line be a component itself?
	 */
	 $h1 = $('#higth_1').height();
	 $h2 = $('#higth_2').height();
	 if($h1 >= $h2)
		{
			$h = $h1;
		}
		else
		{
			$h = $h2;
		}
	 $('.mix_2arts_05 .divisor').css('height',$h);
	 
});