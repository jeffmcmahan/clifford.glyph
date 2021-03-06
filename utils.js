'use strict'

exports.wrap = function (name, value) {
	return `<span class="glyph ${name}">${value || '?'}</span>`
}

exports.map = {
	
	// Typographical
	ash: 'æ',
	Ash: 'Æ',
	asterism:'⁂',
	blackSquare: '■',
	bullet:'•',
	copyright:'©',
	dagger:'†',
	degree:'°',
	doubleDagger:'‡',
	emDash:'—',
	enDash:'–',
	eszett: 'ß',
	numero:'№',
	pilcrow:'¶',
	registered:'®',
	section:'§',
	serviceMark:'℠',
	trademark:'™',

	// Financial
	basisPoint:'‱',
	perMil:'‰',
	cent:'¢',
	dollar:'$',
	euro:'€',
	franc:'₣',
	pound:'£',
	yen:'¥',
	yuan:'元',

	// Mathematical
	and: '∧',
	angleLeft: '⟨',
	angleRight: '⟩',
	approximately: '≈',
	congruent: '≅',
	derivable: '⊢',
	divide:'÷',
	doublePrime:'″',
	equivalent: '≡',
	exists: '∃',
	forAll: '∀',
	lessThanOrEqual: '≤',
	greaterThanOrEqual: '≥',
	rightArrow: '→',
	leftArrow: '←',
	entails: '⊧',
	infinity: '∞',
	integral: '∫',
	integer: 'ℤ',
	leftCorner: '⌈',
	micro: 'µ',
	multiplication:'×',
	natural: 'ℕ',
	negation: '¬',
	notEqual: '≠',
	oIntrgral: '∮',
	or: '∨',
	pi: 'π',
	plusMinus: '±',
	prime:'′',
	product: '∏',
	proportional: '∝',
	properSubset: '⊃',
	properSuperset: '⊂',
	quadruplePrime:'⁗',
	real: 'ℝ',
	rightCorner: '⌉',
	superset: '⊆',
	subset: '⊇',
	squareRoot: '√',
	triplePrime:'‴',
	therefore: '∴',

	// Greek
	aleph: 'ℵ',
	beth: 'ℶ',
	delta: 'δ',
	Delta: '∆',
	mu: 'µ',
	nabla: '∇',
	sigma: 'σ',
	Signma: '∑'
}

exports.acuteMap = {
	a: 'á',
	ash: 'ǽ',
	Ash: 'Ǽ',
	b: 'b́',
	c: 'ć',
	d: 'd́',
	e: 'é',
	f: 'f́',
	g: 'ǵ',
	h: 'h́',
	i: 'í',
	j: 'ȷ́',
	o: 'ó',
	u: 'ú',
	r: 'ŕ'
}

exports.graveMap = {
	a: 'à',
	A: 'À',
	E: 'È',
	e: 'è',
	I: 'Ì',
	i: 'ì',
	O: 'Ò',
	o: 'ò',
	U: 'Ù',
	u: 'ù'
}

exports.umlautMap = {
	a: 'ä',
	A: 'Ä',
	o: 'ö',
	O: 'Ö',
	u: 'ü',
	U: 'Ü'
}