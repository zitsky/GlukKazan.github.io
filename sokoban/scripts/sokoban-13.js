ZRF = {
    JUMP:          0,
    IF:            1,
    FORK:          2,
    FUNCTION:      3,
    IN_ZONE:       4,
    FLAG:          5,
    SET_FLAG:      6,
    POS_FLAG:      7,
    SET_POS_FLAG:  8,
    ATTR:          9,
    SET_ATTR:      10,
    PROMOTE:       11,
    MODE:          12,
    ON_BOARD_DIR:  13,
    ON_BOARD_POS:  14,
    PARAM:         15,
    LITERAL:       16,
    VERIFY:        20
};

Dagaz.Model.BuildDesign = function(design) {
    design.checkVersion("z2j", "2");
    design.checkVersion("animate-captures", "false");
    design.checkVersion("show-blink", "false");
    design.checkVersion("show-hints", "false");
    design.checkVersion("smart-moves", "to");
    design.checkVersion("progressive-levels", "true");
    design.checkVersion("sokoban-goal", "true");

    design.addDirection("w");
    design.addDirection("e");
    design.addDirection("s");
    design.addDirection("n");

    design.addPlayer("You", [1, 0, 3, 2]);

    design.addPosition("a1", [0, 1, 20, 0]);
    design.addPosition("b1", [-1, 1, 20, 0]);
    design.addPosition("c1", [-1, 1, 20, 0]);
    design.addPosition("d1", [-1, 1, 20, 0]);
    design.addPosition("e1", [-1, 1, 20, 0]);
    design.addPosition("f1", [-1, 1, 20, 0]);
    design.addPosition("g1", [-1, 1, 20, 0]);
    design.addPosition("h1", [-1, 1, 20, 0]);
    design.addPosition("i1", [-1, 1, 20, 0]);
    design.addPosition("j1", [-1, 1, 20, 0]);
    design.addPosition("k1", [-1, 1, 20, 0]);
    design.addPosition("l1", [-1, 1, 20, 0]);
    design.addPosition("m1", [-1, 1, 20, 0]);
    design.addPosition("n1", [-1, 1, 20, 0]);
    design.addPosition("o1", [-1, 1, 20, 0]);
    design.addPosition("p1", [-1, 1, 20, 0]);
    design.addPosition("q1", [-1, 1, 20, 0]);
    design.addPosition("r1", [-1, 1, 20, 0]);
    design.addPosition("s1", [-1, 1, 20, 0]);
    design.addPosition("t1", [-1, 0, 20, 0]);
    design.addPosition("a2", [0, 1, 20, -20]);
    design.addPosition("b2", [-1, 1, 20, -20]);
    design.addPosition("c2", [-1, 1, 20, -20]);
    design.addPosition("d2", [-1, 1, 20, -20]);
    design.addPosition("e2", [-1, 1, 20, -20]);
    design.addPosition("f2", [-1, 1, 20, -20]);
    design.addPosition("g2", [-1, 1, 20, -20]);
    design.addPosition("h2", [-1, 1, 20, -20]);
    design.addPosition("i2", [-1, 1, 20, -20]);
    design.addPosition("j2", [-1, 1, 20, -20]);
    design.addPosition("k2", [-1, 1, 20, -20]);
    design.addPosition("l2", [-1, 1, 20, -20]);
    design.addPosition("m2", [-1, 1, 20, -20]);
    design.addPosition("n2", [-1, 1, 20, -20]);
    design.addPosition("o2", [-1, 1, 20, -20]);
    design.addPosition("p2", [-1, 1, 20, -20]);
    design.addPosition("q2", [-1, 1, 20, -20]);
    design.addPosition("r2", [-1, 1, 20, -20]);
    design.addPosition("s2", [-1, 1, 20, -20]);
    design.addPosition("t2", [-1, 0, 20, -20]);
    design.addPosition("a3", [0, 1, 20, -20]);
    design.addPosition("b3", [-1, 1, 20, -20]);
    design.addPosition("c3", [-1, 1, 20, -20]);
    design.addPosition("d3", [-1, 1, 20, -20]);
    design.addPosition("e3", [-1, 1, 20, -20]);
    design.addPosition("f3", [-1, 1, 20, -20]);
    design.addPosition("g3", [-1, 1, 20, -20]);
    design.addPosition("h3", [-1, 1, 20, -20]);
    design.addPosition("i3", [-1, 1, 20, -20]);
    design.addPosition("j3", [-1, 1, 20, -20]);
    design.addPosition("k3", [-1, 1, 20, -20]);
    design.addPosition("l3", [-1, 1, 20, -20]);
    design.addPosition("m3", [-1, 1, 20, -20]);
    design.addPosition("n3", [-1, 1, 20, -20]);
    design.addPosition("o3", [-1, 1, 20, -20]);
    design.addPosition("p3", [-1, 1, 20, -20]);
    design.addPosition("q3", [-1, 1, 20, -20]);
    design.addPosition("r3", [-1, 1, 20, -20]);
    design.addPosition("s3", [-1, 1, 20, -20]);
    design.addPosition("t3", [-1, 0, 20, -20]);
    design.addPosition("a4", [0, 1, 20, -20]);
    design.addPosition("b4", [-1, 1, 20, -20]);
    design.addPosition("c4", [-1, 1, 20, -20]);
    design.addPosition("d4", [-1, 1, 20, -20]);
    design.addPosition("e4", [-1, 1, 20, -20]);
    design.addPosition("f4", [-1, 1, 20, -20]);
    design.addPosition("g4", [-1, 1, 20, -20]);
    design.addPosition("h4", [-1, 1, 20, -20]);
    design.addPosition("i4", [-1, 1, 20, -20]);
    design.addPosition("j4", [-1, 1, 20, -20]);
    design.addPosition("k4", [-1, 1, 20, -20]);
    design.addPosition("l4", [-1, 1, 20, -20]);
    design.addPosition("m4", [-1, 1, 20, -20]);
    design.addPosition("n4", [-1, 1, 20, -20]);
    design.addPosition("o4", [-1, 1, 20, -20]);
    design.addPosition("p4", [-1, 1, 20, -20]);
    design.addPosition("q4", [-1, 1, 20, -20]);
    design.addPosition("r4", [-1, 1, 20, -20]);
    design.addPosition("s4", [-1, 1, 20, -20]);
    design.addPosition("t4", [-1, 0, 20, -20]);
    design.addPosition("a5", [0, 1, 20, -20]);
    design.addPosition("b5", [-1, 1, 20, -20]);
    design.addPosition("c5", [-1, 1, 20, -20]);
    design.addPosition("d5", [-1, 1, 20, -20]);
    design.addPosition("e5", [-1, 1, 20, -20]);
    design.addPosition("f5", [-1, 1, 20, -20]);
    design.addPosition("g5", [-1, 1, 20, -20]);
    design.addPosition("h5", [-1, 1, 20, -20]);
    design.addPosition("i5", [-1, 1, 20, -20]);
    design.addPosition("j5", [-1, 1, 20, -20]);
    design.addPosition("k5", [-1, 1, 20, -20]);
    design.addPosition("l5", [-1, 1, 20, -20]);
    design.addPosition("m5", [-1, 1, 20, -20]);
    design.addPosition("n5", [-1, 1, 20, -20]);
    design.addPosition("o5", [-1, 1, 20, -20]);
    design.addPosition("p5", [-1, 1, 20, -20]);
    design.addPosition("q5", [-1, 1, 20, -20]);
    design.addPosition("r5", [-1, 1, 20, -20]);
    design.addPosition("s5", [-1, 1, 20, -20]);
    design.addPosition("t5", [-1, 0, 20, -20]);
    design.addPosition("a6", [0, 1, 20, -20]);
    design.addPosition("b6", [-1, 1, 20, -20]);
    design.addPosition("c6", [-1, 1, 20, -20]);
    design.addPosition("d6", [-1, 1, 20, -20]);
    design.addPosition("e6", [-1, 1, 20, -20]);
    design.addPosition("f6", [-1, 1, 20, -20]);
    design.addPosition("g6", [-1, 1, 20, -20]);
    design.addPosition("h6", [-1, 1, 20, -20]);
    design.addPosition("i6", [-1, 1, 20, -20]);
    design.addPosition("j6", [-1, 1, 20, -20]);
    design.addPosition("k6", [-1, 1, 20, -20]);
    design.addPosition("l6", [-1, 1, 20, -20]);
    design.addPosition("m6", [-1, 1, 20, -20]);
    design.addPosition("n6", [-1, 1, 20, -20]);
    design.addPosition("o6", [-1, 1, 20, -20]);
    design.addPosition("p6", [-1, 1, 20, -20]);
    design.addPosition("q6", [-1, 1, 20, -20]);
    design.addPosition("r6", [-1, 1, 20, -20]);
    design.addPosition("s6", [-1, 1, 20, -20]);
    design.addPosition("t6", [-1, 0, 20, -20]);
    design.addPosition("a7", [0, 1, 20, -20]);
    design.addPosition("b7", [-1, 1, 20, -20]);
    design.addPosition("c7", [-1, 1, 20, -20]);
    design.addPosition("d7", [-1, 1, 20, -20]);
    design.addPosition("e7", [-1, 1, 20, -20]);
    design.addPosition("f7", [-1, 1, 20, -20]);
    design.addPosition("g7", [-1, 1, 20, -20]);
    design.addPosition("h7", [-1, 1, 20, -20]);
    design.addPosition("i7", [-1, 1, 20, -20]);
    design.addPosition("j7", [-1, 1, 20, -20]);
    design.addPosition("k7", [-1, 1, 20, -20]);
    design.addPosition("l7", [-1, 1, 20, -20]);
    design.addPosition("m7", [-1, 1, 20, -20]);
    design.addPosition("n7", [-1, 1, 20, -20]);
    design.addPosition("o7", [-1, 1, 20, -20]);
    design.addPosition("p7", [-1, 1, 20, -20]);
    design.addPosition("q7", [-1, 1, 20, -20]);
    design.addPosition("r7", [-1, 1, 20, -20]);
    design.addPosition("s7", [-1, 1, 20, -20]);
    design.addPosition("t7", [-1, 0, 20, -20]);
    design.addPosition("a8", [0, 1, 20, -20]);
    design.addPosition("b8", [-1, 1, 20, -20]);
    design.addPosition("c8", [-1, 1, 20, -20]);
    design.addPosition("d8", [-1, 1, 20, -20]);
    design.addPosition("e8", [-1, 1, 20, -20]);
    design.addPosition("f8", [-1, 1, 20, -20]);
    design.addPosition("g8", [-1, 1, 20, -20]);
    design.addPosition("h8", [-1, 1, 20, -20]);
    design.addPosition("i8", [-1, 1, 20, -20]);
    design.addPosition("j8", [-1, 1, 20, -20]);
    design.addPosition("k8", [-1, 1, 20, -20]);
    design.addPosition("l8", [-1, 1, 20, -20]);
    design.addPosition("m8", [-1, 1, 20, -20]);
    design.addPosition("n8", [-1, 1, 20, -20]);
    design.addPosition("o8", [-1, 1, 20, -20]);
    design.addPosition("p8", [-1, 1, 20, -20]);
    design.addPosition("q8", [-1, 1, 20, -20]);
    design.addPosition("r8", [-1, 1, 20, -20]);
    design.addPosition("s8", [-1, 1, 20, -20]);
    design.addPosition("t8", [-1, 0, 20, -20]);
    design.addPosition("a9", [0, 1, 20, -20]);
    design.addPosition("b9", [-1, 1, 20, -20]);
    design.addPosition("c9", [-1, 1, 20, -20]);
    design.addPosition("d9", [-1, 1, 20, -20]);
    design.addPosition("e9", [-1, 1, 20, -20]);
    design.addPosition("f9", [-1, 1, 20, -20]);
    design.addPosition("g9", [-1, 1, 20, -20]);
    design.addPosition("h9", [-1, 1, 20, -20]);
    design.addPosition("i9", [-1, 1, 20, -20]);
    design.addPosition("j9", [-1, 1, 20, -20]);
    design.addPosition("k9", [-1, 1, 20, -20]);
    design.addPosition("l9", [-1, 1, 20, -20]);
    design.addPosition("m9", [-1, 1, 20, -20]);
    design.addPosition("n9", [-1, 1, 20, -20]);
    design.addPosition("o9", [-1, 1, 20, -20]);
    design.addPosition("p9", [-1, 1, 20, -20]);
    design.addPosition("q9", [-1, 1, 20, -20]);
    design.addPosition("r9", [-1, 1, 20, -20]);
    design.addPosition("s9", [-1, 1, 20, -20]);
    design.addPosition("t9", [-1, 0, 20, -20]);
    design.addPosition("a10", [0, 1, 20, -20]);
    design.addPosition("b10", [-1, 1, 20, -20]);
    design.addPosition("c10", [-1, 1, 20, -20]);
    design.addPosition("d10", [-1, 1, 20, -20]);
    design.addPosition("e10", [-1, 1, 20, -20]);
    design.addPosition("f10", [-1, 1, 20, -20]);
    design.addPosition("g10", [-1, 1, 20, -20]);
    design.addPosition("h10", [-1, 1, 20, -20]);
    design.addPosition("i10", [-1, 1, 20, -20]);
    design.addPosition("j10", [-1, 1, 20, -20]);
    design.addPosition("k10", [-1, 1, 20, -20]);
    design.addPosition("l10", [-1, 1, 20, -20]);
    design.addPosition("m10", [-1, 1, 20, -20]);
    design.addPosition("n10", [-1, 1, 20, -20]);
    design.addPosition("o10", [-1, 1, 20, -20]);
    design.addPosition("p10", [-1, 1, 20, -20]);
    design.addPosition("q10", [-1, 1, 20, -20]);
    design.addPosition("r10", [-1, 1, 20, -20]);
    design.addPosition("s10", [-1, 1, 20, -20]);
    design.addPosition("t10", [-1, 0, 20, -20]);
    design.addPosition("a11", [0, 1, 20, -20]);
    design.addPosition("b11", [-1, 1, 20, -20]);
    design.addPosition("c11", [-1, 1, 20, -20]);
    design.addPosition("d11", [-1, 1, 20, -20]);
    design.addPosition("e11", [-1, 1, 20, -20]);
    design.addPosition("f11", [-1, 1, 20, -20]);
    design.addPosition("g11", [-1, 1, 20, -20]);
    design.addPosition("h11", [-1, 1, 20, -20]);
    design.addPosition("i11", [-1, 1, 20, -20]);
    design.addPosition("j11", [-1, 1, 20, -20]);
    design.addPosition("k11", [-1, 1, 20, -20]);
    design.addPosition("l11", [-1, 1, 20, -20]);
    design.addPosition("m11", [-1, 1, 20, -20]);
    design.addPosition("n11", [-1, 1, 20, -20]);
    design.addPosition("o11", [-1, 1, 20, -20]);
    design.addPosition("p11", [-1, 1, 20, -20]);
    design.addPosition("q11", [-1, 1, 20, -20]);
    design.addPosition("r11", [-1, 1, 20, -20]);
    design.addPosition("s11", [-1, 1, 20, -20]);
    design.addPosition("t11", [-1, 0, 20, -20]);
    design.addPosition("a12", [0, 1, 20, -20]);
    design.addPosition("b12", [-1, 1, 20, -20]);
    design.addPosition("c12", [-1, 1, 20, -20]);
    design.addPosition("d12", [-1, 1, 20, -20]);
    design.addPosition("e12", [-1, 1, 20, -20]);
    design.addPosition("f12", [-1, 1, 20, -20]);
    design.addPosition("g12", [-1, 1, 20, -20]);
    design.addPosition("h12", [-1, 1, 20, -20]);
    design.addPosition("i12", [-1, 1, 20, -20]);
    design.addPosition("j12", [-1, 1, 20, -20]);
    design.addPosition("k12", [-1, 1, 20, -20]);
    design.addPosition("l12", [-1, 1, 20, -20]);
    design.addPosition("m12", [-1, 1, 20, -20]);
    design.addPosition("n12", [-1, 1, 20, -20]);
    design.addPosition("o12", [-1, 1, 20, -20]);
    design.addPosition("p12", [-1, 1, 20, -20]);
    design.addPosition("q12", [-1, 1, 20, -20]);
    design.addPosition("r12", [-1, 1, 20, -20]);
    design.addPosition("s12", [-1, 1, 20, -20]);
    design.addPosition("t12", [-1, 0, 20, -20]);
    design.addPosition("a13", [0, 1, 0, -20]);
    design.addPosition("b13", [-1, 1, 0, -20]);
    design.addPosition("c13", [-1, 1, 0, -20]);
    design.addPosition("d13", [-1, 1, 0, -20]);
    design.addPosition("e13", [-1, 1, 0, -20]);
    design.addPosition("f13", [-1, 1, 0, -20]);
    design.addPosition("g13", [-1, 1, 0, -20]);
    design.addPosition("h13", [-1, 1, 0, -20]);
    design.addPosition("i13", [-1, 1, 0, -20]);
    design.addPosition("j13", [-1, 1, 0, -20]);
    design.addPosition("k13", [-1, 1, 0, -20]);
    design.addPosition("l13", [-1, 1, 0, -20]);
    design.addPosition("m13", [-1, 1, 0, -20]);
    design.addPosition("n13", [-1, 1, 0, -20]);
    design.addPosition("o13", [-1, 1, 0, -20]);
    design.addPosition("p13", [-1, 1, 0, -20]);
    design.addPosition("q13", [-1, 1, 0, -20]);
    design.addPosition("r13", [-1, 1, 0, -20]);
    design.addPosition("s13", [-1, 1, 0, -20]);
    design.addPosition("t13", [-1, 0, 0, -20]);

    design.addZone("goal", 1, [77, 195, 115, 117, 156, 175, 196, 75, 116, 177, 135, 76, 97, 137, 155, 95, 157, 197]);

    design.addCommand(0, ZRF.FUNCTION,	24);	// from
    design.addCommand(0, ZRF.PARAM,	0);	// $1
    design.addCommand(0, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(0, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(0, ZRF.FUNCTION,	0);	// not
    design.addCommand(0, ZRF.IF,	7);
    design.addCommand(0, ZRF.FORK,	3);
    design.addCommand(0, ZRF.FUNCTION,	25);	// to
    design.addCommand(0, ZRF.FUNCTION,	28);	// end
    design.addCommand(0, ZRF.PARAM,	1);	// $2
    design.addCommand(0, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(0, ZRF.JUMP,	-8);
    design.addCommand(0, ZRF.FUNCTION,	28);	// end

    design.addCommand(1, ZRF.FUNCTION,	24);	// from
    design.addCommand(1, ZRF.PARAM,	0);	// $1
    design.addCommand(1, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(1, ZRF.LITERAL,	0);	// Box
    design.addCommand(1, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(1, ZRF.FUNCTION,	20);	// verify
    design.addCommand(1, ZRF.FUNCTION,	25);	// to
    design.addCommand(1, ZRF.FUNCTION,	24);	// from
    design.addCommand(1, ZRF.PARAM,	1);	// $2
    design.addCommand(1, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(1, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(1, ZRF.FUNCTION,	20);	// verify
    design.addCommand(1, ZRF.FUNCTION,	25);	// to
    design.addCommand(1, ZRF.FUNCTION,	28);	// end

    design.addCommand(2, ZRF.FUNCTION,	24);	// from
    design.addCommand(2, ZRF.PARAM,	0);	// $1
    design.addCommand(2, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(2, ZRF.LITERAL,	0);	// Box
    design.addCommand(2, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(2, ZRF.FUNCTION,	20);	// verify
    design.addCommand(2, ZRF.FUNCTION,	6);	// mark
    design.addCommand(2, ZRF.PARAM,	1);	// $2
    design.addCommand(2, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(2, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(2, ZRF.FUNCTION,	20);	// verify
    design.addCommand(2, ZRF.FUNCTION,	25);	// to
    design.addCommand(2, ZRF.FUNCTION,	7);	// back
    design.addCommand(2, ZRF.FUNCTION,	24);	// from
    design.addCommand(2, ZRF.PARAM,	2);	// $3
    design.addCommand(2, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(2, ZRF.PARAM,	3);	// $4
    design.addCommand(2, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(2, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(2, ZRF.FUNCTION,	20);	// verify
    design.addCommand(2, ZRF.FUNCTION,	25);	// to
    design.addCommand(2, ZRF.FUNCTION,	28);	// end

    design.addCommand(3, ZRF.FUNCTION,	24);	// from
    design.addCommand(3, ZRF.PARAM,	0);	// $1
    design.addCommand(3, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(3, ZRF.LITERAL,	0);	// Box
    design.addCommand(3, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(3, ZRF.FUNCTION,	20);	// verify
    design.addCommand(3, ZRF.FUNCTION,	6);	// mark
    design.addCommand(3, ZRF.PARAM,	1);	// $2
    design.addCommand(3, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(3, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(3, ZRF.FUNCTION,	20);	// verify
    design.addCommand(3, ZRF.PARAM,	2);	// $3
    design.addCommand(3, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(3, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(3, ZRF.FUNCTION,	20);	// verify
    design.addCommand(3, ZRF.FUNCTION,	25);	// to
    design.addCommand(3, ZRF.FUNCTION,	7);	// back
    design.addCommand(3, ZRF.FUNCTION,	24);	// from
    design.addCommand(3, ZRF.PARAM,	3);	// $4
    design.addCommand(3, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(3, ZRF.PARAM,	4);	// $5
    design.addCommand(3, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(3, ZRF.PARAM,	5);	// $6
    design.addCommand(3, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(3, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(3, ZRF.FUNCTION,	20);	// verify
    design.addCommand(3, ZRF.FUNCTION,	25);	// to
    design.addCommand(3, ZRF.FUNCTION,	28);	// end

    design.addCommand(4, ZRF.FUNCTION,	24);	// from
    design.addCommand(4, ZRF.PARAM,	0);	// $1
    design.addCommand(4, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(4, ZRF.LITERAL,	0);	// Box
    design.addCommand(4, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(4, ZRF.FUNCTION,	20);	// verify
    design.addCommand(4, ZRF.FUNCTION,	6);	// mark
    design.addCommand(4, ZRF.PARAM,	1);	// $2
    design.addCommand(4, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(4, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(4, ZRF.FUNCTION,	20);	// verify
    design.addCommand(4, ZRF.PARAM,	2);	// $3
    design.addCommand(4, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(4, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(4, ZRF.FUNCTION,	20);	// verify
    design.addCommand(4, ZRF.PARAM,	3);	// $4
    design.addCommand(4, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(4, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(4, ZRF.FUNCTION,	20);	// verify
    design.addCommand(4, ZRF.FUNCTION,	25);	// to
    design.addCommand(4, ZRF.FUNCTION,	7);	// back
    design.addCommand(4, ZRF.FUNCTION,	24);	// from
    design.addCommand(4, ZRF.PARAM,	4);	// $5
    design.addCommand(4, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(4, ZRF.PARAM,	5);	// $6
    design.addCommand(4, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(4, ZRF.PARAM,	6);	// $7
    design.addCommand(4, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(4, ZRF.PARAM,	7);	// $8
    design.addCommand(4, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(4, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(4, ZRF.FUNCTION,	20);	// verify
    design.addCommand(4, ZRF.FUNCTION,	25);	// to
    design.addCommand(4, ZRF.FUNCTION,	28);	// end

    design.addCommand(5, ZRF.FUNCTION,	24);	// from
    design.addCommand(5, ZRF.PARAM,	0);	// $1
    design.addCommand(5, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(5, ZRF.LITERAL,	0);	// Box
    design.addCommand(5, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(5, ZRF.FUNCTION,	20);	// verify
    design.addCommand(5, ZRF.FUNCTION,	6);	// mark
    design.addCommand(5, ZRF.PARAM,	1);	// $2
    design.addCommand(5, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(5, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(5, ZRF.FUNCTION,	20);	// verify
    design.addCommand(5, ZRF.PARAM,	2);	// $3
    design.addCommand(5, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(5, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(5, ZRF.FUNCTION,	20);	// verify
    design.addCommand(5, ZRF.PARAM,	3);	// $4
    design.addCommand(5, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(5, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(5, ZRF.FUNCTION,	20);	// verify
    design.addCommand(5, ZRF.PARAM,	4);	// $5
    design.addCommand(5, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(5, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(5, ZRF.FUNCTION,	20);	// verify
    design.addCommand(5, ZRF.FUNCTION,	25);	// to
    design.addCommand(5, ZRF.FUNCTION,	7);	// back
    design.addCommand(5, ZRF.FUNCTION,	24);	// from
    design.addCommand(5, ZRF.PARAM,	5);	// $6
    design.addCommand(5, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(5, ZRF.PARAM,	6);	// $7
    design.addCommand(5, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(5, ZRF.PARAM,	7);	// $8
    design.addCommand(5, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(5, ZRF.PARAM,	8);	// $9
    design.addCommand(5, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(5, ZRF.PARAM,	9);	// $10
    design.addCommand(5, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(5, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(5, ZRF.FUNCTION,	20);	// verify
    design.addCommand(5, ZRF.FUNCTION,	25);	// to
    design.addCommand(5, ZRF.FUNCTION,	28);	// end

    design.addCommand(6, ZRF.FUNCTION,	24);	// from
    design.addCommand(6, ZRF.PARAM,	0);	// $1
    design.addCommand(6, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(6, ZRF.LITERAL,	0);	// Box
    design.addCommand(6, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(6, ZRF.FUNCTION,	20);	// verify
    design.addCommand(6, ZRF.FUNCTION,	6);	// mark
    design.addCommand(6, ZRF.PARAM,	1);	// $2
    design.addCommand(6, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(6, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(6, ZRF.FUNCTION,	20);	// verify
    design.addCommand(6, ZRF.PARAM,	2);	// $3
    design.addCommand(6, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(6, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(6, ZRF.FUNCTION,	20);	// verify
    design.addCommand(6, ZRF.PARAM,	3);	// $4
    design.addCommand(6, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(6, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(6, ZRF.FUNCTION,	20);	// verify
    design.addCommand(6, ZRF.PARAM,	4);	// $5
    design.addCommand(6, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(6, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(6, ZRF.FUNCTION,	20);	// verify
    design.addCommand(6, ZRF.PARAM,	5);	// $6
    design.addCommand(6, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(6, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(6, ZRF.FUNCTION,	20);	// verify
    design.addCommand(6, ZRF.FUNCTION,	25);	// to
    design.addCommand(6, ZRF.FUNCTION,	7);	// back
    design.addCommand(6, ZRF.FUNCTION,	24);	// from
    design.addCommand(6, ZRF.PARAM,	6);	// $7
    design.addCommand(6, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(6, ZRF.PARAM,	7);	// $8
    design.addCommand(6, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(6, ZRF.PARAM,	8);	// $9
    design.addCommand(6, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(6, ZRF.PARAM,	9);	// $10
    design.addCommand(6, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(6, ZRF.PARAM,	10);	// $11
    design.addCommand(6, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(6, ZRF.PARAM,	11);	// $12
    design.addCommand(6, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(6, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(6, ZRF.FUNCTION,	20);	// verify
    design.addCommand(6, ZRF.FUNCTION,	25);	// to
    design.addCommand(6, ZRF.FUNCTION,	28);	// end

    design.addCommand(7, ZRF.FUNCTION,	24);	// from
    design.addCommand(7, ZRF.PARAM,	0);	// $1
    design.addCommand(7, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(7, ZRF.LITERAL,	0);	// Box
    design.addCommand(7, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(7, ZRF.FUNCTION,	20);	// verify
    design.addCommand(7, ZRF.FUNCTION,	6);	// mark
    design.addCommand(7, ZRF.PARAM,	1);	// $2
    design.addCommand(7, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(7, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(7, ZRF.FUNCTION,	20);	// verify
    design.addCommand(7, ZRF.PARAM,	2);	// $3
    design.addCommand(7, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(7, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(7, ZRF.FUNCTION,	20);	// verify
    design.addCommand(7, ZRF.PARAM,	3);	// $4
    design.addCommand(7, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(7, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(7, ZRF.FUNCTION,	20);	// verify
    design.addCommand(7, ZRF.PARAM,	4);	// $5
    design.addCommand(7, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(7, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(7, ZRF.FUNCTION,	20);	// verify
    design.addCommand(7, ZRF.PARAM,	5);	// $6
    design.addCommand(7, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(7, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(7, ZRF.FUNCTION,	20);	// verify
    design.addCommand(7, ZRF.PARAM,	6);	// $7
    design.addCommand(7, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(7, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(7, ZRF.FUNCTION,	20);	// verify
    design.addCommand(7, ZRF.FUNCTION,	25);	// to
    design.addCommand(7, ZRF.FUNCTION,	7);	// back
    design.addCommand(7, ZRF.FUNCTION,	24);	// from
    design.addCommand(7, ZRF.PARAM,	7);	// $8
    design.addCommand(7, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(7, ZRF.PARAM,	8);	// $9
    design.addCommand(7, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(7, ZRF.PARAM,	9);	// $10
    design.addCommand(7, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(7, ZRF.PARAM,	10);	// $11
    design.addCommand(7, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(7, ZRF.PARAM,	11);	// $12
    design.addCommand(7, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(7, ZRF.PARAM,	12);	// $13
    design.addCommand(7, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(7, ZRF.PARAM,	13);	// $14
    design.addCommand(7, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(7, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(7, ZRF.FUNCTION,	20);	// verify
    design.addCommand(7, ZRF.FUNCTION,	25);	// to
    design.addCommand(7, ZRF.FUNCTION,	28);	// end

    design.addCommand(8, ZRF.FUNCTION,	24);	// from
    design.addCommand(8, ZRF.PARAM,	0);	// $1
    design.addCommand(8, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(8, ZRF.LITERAL,	0);	// Box
    design.addCommand(8, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(8, ZRF.FUNCTION,	20);	// verify
    design.addCommand(8, ZRF.FUNCTION,	6);	// mark
    design.addCommand(8, ZRF.PARAM,	1);	// $2
    design.addCommand(8, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(8, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(8, ZRF.FUNCTION,	20);	// verify
    design.addCommand(8, ZRF.PARAM,	2);	// $3
    design.addCommand(8, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(8, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(8, ZRF.FUNCTION,	20);	// verify
    design.addCommand(8, ZRF.PARAM,	3);	// $4
    design.addCommand(8, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(8, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(8, ZRF.FUNCTION,	20);	// verify
    design.addCommand(8, ZRF.PARAM,	4);	// $5
    design.addCommand(8, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(8, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(8, ZRF.FUNCTION,	20);	// verify
    design.addCommand(8, ZRF.PARAM,	5);	// $6
    design.addCommand(8, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(8, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(8, ZRF.FUNCTION,	20);	// verify
    design.addCommand(8, ZRF.PARAM,	6);	// $7
    design.addCommand(8, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(8, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(8, ZRF.FUNCTION,	20);	// verify
    design.addCommand(8, ZRF.PARAM,	7);	// $8
    design.addCommand(8, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(8, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(8, ZRF.FUNCTION,	20);	// verify
    design.addCommand(8, ZRF.FUNCTION,	25);	// to
    design.addCommand(8, ZRF.FUNCTION,	7);	// back
    design.addCommand(8, ZRF.FUNCTION,	24);	// from
    design.addCommand(8, ZRF.PARAM,	8);	// $9
    design.addCommand(8, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(8, ZRF.PARAM,	9);	// $10
    design.addCommand(8, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(8, ZRF.PARAM,	10);	// $11
    design.addCommand(8, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(8, ZRF.PARAM,	11);	// $12
    design.addCommand(8, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(8, ZRF.PARAM,	12);	// $13
    design.addCommand(8, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(8, ZRF.PARAM,	13);	// $14
    design.addCommand(8, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(8, ZRF.PARAM,	14);	// $15
    design.addCommand(8, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(8, ZRF.PARAM,	15);	// $16
    design.addCommand(8, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(8, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(8, ZRF.FUNCTION,	20);	// verify
    design.addCommand(8, ZRF.FUNCTION,	25);	// to
    design.addCommand(8, ZRF.FUNCTION,	28);	// end

    design.addPiece("Box", 0);

    design.addPiece("Wall", 1);

    design.addPiece("Ball", 2);
    design.addMove(2, 0, [3, 3], 0);
    design.addMove(2, 1, [3, 3], 0);
    design.addMove(2, 2, [3, 3, 3, 3], 0);
    design.addMove(2, 3, [3, 3, 3, 3, 3, 3], 0);
    design.addMove(2, 4, [3, 3, 3, 3, 3, 3, 3, 3], 0);
    design.addMove(2, 5, [3, 3, 3, 3, 3, 3, 3, 3, 3, 3], 0);
    design.addMove(2, 6, [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3], 0);
    design.addMove(2, 7, [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3], 0);
    design.addMove(2, 8, [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3], 0);
    design.addMove(2, 0, [2, 2], 0);
    design.addMove(2, 1, [2, 2], 0);
    design.addMove(2, 2, [2, 2, 2, 2], 0);
    design.addMove(2, 3, [2, 2, 2, 2, 2, 2], 0);
    design.addMove(2, 4, [2, 2, 2, 2, 2, 2, 2, 2], 0);
    design.addMove(2, 5, [2, 2, 2, 2, 2, 2, 2, 2, 2, 2], 0);
    design.addMove(2, 6, [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2], 0);
    design.addMove(2, 7, [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2], 0);
    design.addMove(2, 8, [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2], 0);
    design.addMove(2, 0, [0, 0], 0);
    design.addMove(2, 1, [0, 0], 0);
    design.addMove(2, 2, [0, 0, 0, 0], 0);
    design.addMove(2, 3, [0, 0, 0, 0, 0, 0], 0);
    design.addMove(2, 4, [0, 0, 0, 0, 0, 0, 0, 0], 0);
    design.addMove(2, 5, [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 0);
    design.addMove(2, 6, [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 0);
    design.addMove(2, 7, [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 0);
    design.addMove(2, 8, [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 0);
    design.addMove(2, 0, [1, 1], 0);
    design.addMove(2, 1, [1, 1], 0);
    design.addMove(2, 2, [1, 1, 1, 1], 0);
    design.addMove(2, 3, [1, 1, 1, 1, 1, 1], 0);
    design.addMove(2, 4, [1, 1, 1, 1, 1, 1, 1, 1], 0);
    design.addMove(2, 5, [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 0);
    design.addMove(2, 6, [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 0);
    design.addMove(2, 7, [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 0);
    design.addMove(2, 8, [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 0);

    design.setup("You", "Wall", 24);
    design.setup("You", "Wall", 33);
    design.setup("You", "Wall", 72);
    design.setup("You", "Wall", 99);
    design.setup("You", "Wall", 6);
    design.setup("You", "Wall", 90);
    design.setup("You", "Wall", 59);
    design.setup("You", "Wall", 159);
    design.setup("You", "Wall", 239);
    design.setup("You", "Wall", 29);
    design.setup("You", "Wall", 245);
    design.setup("You", "Wall", 34);
    design.setup("You", "Wall", 238);
    design.setup("You", "Wall", 241);
    design.setup("You", "Wall", 234);
    design.setup("You", "Wall", 28);
    design.setup("You", "Wall", 231);
    design.setup("You", "Wall", 86);
    design.setup("You", "Wall", 35);
    design.setup("You", "Wall", 12);
    design.setup("You", "Wall", 236);
    design.setup("You", "Wall", 221);
    design.setup("You", "Wall", 106);
    design.setup("You", "Wall", 10);
    design.setup("You", "Wall", 32);
    design.setup("You", "Wall", 210);
    design.setup("You", "Wall", 36);
    design.setup("You", "Wall", 149);
    design.setup("You", "Wall", 7);
    design.setup("You", "Wall", 160);
    design.setup("You", "Wall", 130);
    design.setup("You", "Wall", 233);
    design.setup("You", "Wall", 132);
    design.setup("You", "Wall", 80);
    design.setup("You", "Wall", 235);
    design.setup("You", "Wall", 103);
    design.setup("You", "Wall", 42);
    design.setup("You", "Wall", 82);
    design.setup("You", "Wall", 120);
    design.setup("You", "Wall", 92);
    design.setup("You", "Wall", 242);
    design.setup("You", "Wall", 206);
    design.setup("You", "Wall", 232);
    design.setup("You", "Wall", 181);
    design.setup("You", "Wall", 94);
    design.setup("You", "Wall", 23);
    design.setup("You", "Wall", 208);
    design.setup("You", "Wall", 219);
    design.setup("You", "Wall", 180);
    design.setup("You", "Wall", 169);
    design.setup("You", "Wall", 66);
    design.setup("You", "Wall", 4);
    design.setup("You", "Wall", 174);
    design.setup("You", "Wall", 41);
    design.setup("You", "Wall", 100);
    design.setup("You", "Wall", 139);
    design.setup("You", "Wall", 57);
    design.setup("You", "Wall", 179);
    design.setup("You", "Wall", 140);
    design.setup("You", "Wall", 209);
    design.setup("You", "Wall", 199);
    design.setup("You", "Wall", 40);
    design.setup("You", "Wall", 11);
    design.setup("You", "Wall", 225);
    design.setup("You", "Wall", 164);
    design.setup("You", "Wall", 69);
    design.setup("You", "Wall", 207);
    design.setup("You", "Wall", 49);
    design.setup("You", "Wall", 216);
    design.setup("You", "Wall", 96);
    design.setup("You", "Wall", 104);
    design.setup("You", "Wall", 22);
    design.setup("You", "Wall", 243);
    design.setup("You", "Wall", 5);
    design.setup("You", "Wall", 119);
    design.setup("You", "Wall", 176);
    design.setup("You", "Wall", 134);
    design.setup("You", "Wall", 56);
    design.setup("You", "Wall", 58);
    design.setup("You", "Wall", 237);
    design.setup("You", "Wall", 8);
    design.setup("You", "Wall", 145);
    design.setup("You", "Wall", 52);
    design.setup("You", "Wall", 110);
    design.setup("You", "Wall", 146);
    design.setup("You", "Wall", 89);
    design.setup("You", "Wall", 172);
    design.setup("You", "Wall", 136);
    design.setup("You", "Wall", 123);
    design.setup("You", "Wall", 165);
    design.setup("You", "Wall", 150);
    design.setup("You", "Wall", 79);
    design.setup("You", "Wall", 244);
    design.setup("You", "Wall", 215);
    design.setup("You", "Wall", 9);
    design.setup("You", "Wall", 205);
    design.setup("You", "Wall", 201);
    design.setup("You", "Wall", 60);
    design.setup("You", "Wall", 230);
    design.setup("You", "Box", 153);
    design.setup("You", "Box", 88);
    design.setup("You", "Box", 67);
    design.setup("You", "Box", 128);
    design.setup("You", "Box", 63);
    design.setup("You", "Box", 151);
    design.setup("You", "Box", 173);
    design.setup("You", "Box", 202);
    design.setup("You", "Box", 194);
    design.setup("You", "Box", 187);
    design.setup("You", "Box", 162);
    design.setup("You", "Box", 122);
    design.setup("You", "Box", 64);
    design.setup("You", "Box", 107);
    design.setup("You", "Box", 191);
    design.setup("You", "Box", 184);
    design.setup("You", "Box", 183);
    design.setup("You", "Box", 85);
    design.setup("You", "Ball", 87);
}

Dagaz.View.configure = function(view) {
    view.defBoard("Board");
    view.defPiece("YouBox", "You Box");
    view.defPiece("YouWall", "You Wall");
    view.defPiece("YouBall", "You Ball");
 
    view.defPosition("a1", 0, 0, 24, 24);
    view.defPosition("b1", 24, 0, 24, 24);
    view.defPosition("c1", 48, 0, 24, 24);
    view.defPosition("d1", 72, 0, 24, 24);
    view.defPosition("e1", 96, 0, 24, 24);
    view.defPosition("f1", 120, 0, 24, 24);
    view.defPosition("g1", 144, 0, 24, 24);
    view.defPosition("h1", 168, 0, 24, 24);
    view.defPosition("i1", 192, 0, 24, 24);
    view.defPosition("j1", 216, 0, 24, 24);
    view.defPosition("k1", 240, 0, 24, 24);
    view.defPosition("l1", 264, 0, 24, 24);
    view.defPosition("m1", 288, 0, 24, 24);
    view.defPosition("n1", 312, 0, 24, 24);
    view.defPosition("o1", 336, 0, 24, 24);
    view.defPosition("p1", 360, 0, 24, 24);
    view.defPosition("q1", 384, 0, 24, 24);
    view.defPosition("r1", 408, 0, 24, 24);
    view.defPosition("s1", 432, 0, 24, 24);
    view.defPosition("t1", 456, 0, 24, 24);
    view.defPosition("a2", 0, 24, 24, 24);
    view.defPosition("b2", 24, 24, 24, 24);
    view.defPosition("c2", 48, 24, 24, 24);
    view.defPosition("d2", 72, 24, 24, 24);
    view.defPosition("e2", 96, 24, 24, 24);
    view.defPosition("f2", 120, 24, 24, 24);
    view.defPosition("g2", 144, 24, 24, 24);
    view.defPosition("h2", 168, 24, 24, 24);
    view.defPosition("i2", 192, 24, 24, 24);
    view.defPosition("j2", 216, 24, 24, 24);
    view.defPosition("k2", 240, 24, 24, 24);
    view.defPosition("l2", 264, 24, 24, 24);
    view.defPosition("m2", 288, 24, 24, 24);
    view.defPosition("n2", 312, 24, 24, 24);
    view.defPosition("o2", 336, 24, 24, 24);
    view.defPosition("p2", 360, 24, 24, 24);
    view.defPosition("q2", 384, 24, 24, 24);
    view.defPosition("r2", 408, 24, 24, 24);
    view.defPosition("s2", 432, 24, 24, 24);
    view.defPosition("t2", 456, 24, 24, 24);
    view.defPosition("a3", 0, 48, 24, 24);
    view.defPosition("b3", 24, 48, 24, 24);
    view.defPosition("c3", 48, 48, 24, 24);
    view.defPosition("d3", 72, 48, 24, 24);
    view.defPosition("e3", 96, 48, 24, 24);
    view.defPosition("f3", 120, 48, 24, 24);
    view.defPosition("g3", 144, 48, 24, 24);
    view.defPosition("h3", 168, 48, 24, 24);
    view.defPosition("i3", 192, 48, 24, 24);
    view.defPosition("j3", 216, 48, 24, 24);
    view.defPosition("k3", 240, 48, 24, 24);
    view.defPosition("l3", 264, 48, 24, 24);
    view.defPosition("m3", 288, 48, 24, 24);
    view.defPosition("n3", 312, 48, 24, 24);
    view.defPosition("o3", 336, 48, 24, 24);
    view.defPosition("p3", 360, 48, 24, 24);
    view.defPosition("q3", 384, 48, 24, 24);
    view.defPosition("r3", 408, 48, 24, 24);
    view.defPosition("s3", 432, 48, 24, 24);
    view.defPosition("t3", 456, 48, 24, 24);
    view.defPosition("a4", 0, 72, 24, 24);
    view.defPosition("b4", 24, 72, 24, 24);
    view.defPosition("c4", 48, 72, 24, 24);
    view.defPosition("d4", 72, 72, 24, 24);
    view.defPosition("e4", 96, 72, 24, 24);
    view.defPosition("f4", 120, 72, 24, 24);
    view.defPosition("g4", 144, 72, 24, 24);
    view.defPosition("h4", 168, 72, 24, 24);
    view.defPosition("i4", 192, 72, 24, 24);
    view.defPosition("j4", 216, 72, 24, 24);
    view.defPosition("k4", 240, 72, 24, 24);
    view.defPosition("l4", 264, 72, 24, 24);
    view.defPosition("m4", 288, 72, 24, 24);
    view.defPosition("n4", 312, 72, 24, 24);
    view.defPosition("o4", 336, 72, 24, 24);
    view.defPosition("p4", 360, 72, 24, 24);
    view.defPosition("q4", 384, 72, 24, 24);
    view.defPosition("r4", 408, 72, 24, 24);
    view.defPosition("s4", 432, 72, 24, 24);
    view.defPosition("t4", 456, 72, 24, 24);
    view.defPosition("a5", 0, 96, 24, 24);
    view.defPosition("b5", 24, 96, 24, 24);
    view.defPosition("c5", 48, 96, 24, 24);
    view.defPosition("d5", 72, 96, 24, 24);
    view.defPosition("e5", 96, 96, 24, 24);
    view.defPosition("f5", 120, 96, 24, 24);
    view.defPosition("g5", 144, 96, 24, 24);
    view.defPosition("h5", 168, 96, 24, 24);
    view.defPosition("i5", 192, 96, 24, 24);
    view.defPosition("j5", 216, 96, 24, 24);
    view.defPosition("k5", 240, 96, 24, 24);
    view.defPosition("l5", 264, 96, 24, 24);
    view.defPosition("m5", 288, 96, 24, 24);
    view.defPosition("n5", 312, 96, 24, 24);
    view.defPosition("o5", 336, 96, 24, 24);
    view.defPosition("p5", 360, 96, 24, 24);
    view.defPosition("q5", 384, 96, 24, 24);
    view.defPosition("r5", 408, 96, 24, 24);
    view.defPosition("s5", 432, 96, 24, 24);
    view.defPosition("t5", 456, 96, 24, 24);
    view.defPosition("a6", 0, 120, 24, 24);
    view.defPosition("b6", 24, 120, 24, 24);
    view.defPosition("c6", 48, 120, 24, 24);
    view.defPosition("d6", 72, 120, 24, 24);
    view.defPosition("e6", 96, 120, 24, 24);
    view.defPosition("f6", 120, 120, 24, 24);
    view.defPosition("g6", 144, 120, 24, 24);
    view.defPosition("h6", 168, 120, 24, 24);
    view.defPosition("i6", 192, 120, 24, 24);
    view.defPosition("j6", 216, 120, 24, 24);
    view.defPosition("k6", 240, 120, 24, 24);
    view.defPosition("l6", 264, 120, 24, 24);
    view.defPosition("m6", 288, 120, 24, 24);
    view.defPosition("n6", 312, 120, 24, 24);
    view.defPosition("o6", 336, 120, 24, 24);
    view.defPosition("p6", 360, 120, 24, 24);
    view.defPosition("q6", 384, 120, 24, 24);
    view.defPosition("r6", 408, 120, 24, 24);
    view.defPosition("s6", 432, 120, 24, 24);
    view.defPosition("t6", 456, 120, 24, 24);
    view.defPosition("a7", 0, 144, 24, 24);
    view.defPosition("b7", 24, 144, 24, 24);
    view.defPosition("c7", 48, 144, 24, 24);
    view.defPosition("d7", 72, 144, 24, 24);
    view.defPosition("e7", 96, 144, 24, 24);
    view.defPosition("f7", 120, 144, 24, 24);
    view.defPosition("g7", 144, 144, 24, 24);
    view.defPosition("h7", 168, 144, 24, 24);
    view.defPosition("i7", 192, 144, 24, 24);
    view.defPosition("j7", 216, 144, 24, 24);
    view.defPosition("k7", 240, 144, 24, 24);
    view.defPosition("l7", 264, 144, 24, 24);
    view.defPosition("m7", 288, 144, 24, 24);
    view.defPosition("n7", 312, 144, 24, 24);
    view.defPosition("o7", 336, 144, 24, 24);
    view.defPosition("p7", 360, 144, 24, 24);
    view.defPosition("q7", 384, 144, 24, 24);
    view.defPosition("r7", 408, 144, 24, 24);
    view.defPosition("s7", 432, 144, 24, 24);
    view.defPosition("t7", 456, 144, 24, 24);
    view.defPosition("a8", 0, 168, 24, 24);
    view.defPosition("b8", 24, 168, 24, 24);
    view.defPosition("c8", 48, 168, 24, 24);
    view.defPosition("d8", 72, 168, 24, 24);
    view.defPosition("e8", 96, 168, 24, 24);
    view.defPosition("f8", 120, 168, 24, 24);
    view.defPosition("g8", 144, 168, 24, 24);
    view.defPosition("h8", 168, 168, 24, 24);
    view.defPosition("i8", 192, 168, 24, 24);
    view.defPosition("j8", 216, 168, 24, 24);
    view.defPosition("k8", 240, 168, 24, 24);
    view.defPosition("l8", 264, 168, 24, 24);
    view.defPosition("m8", 288, 168, 24, 24);
    view.defPosition("n8", 312, 168, 24, 24);
    view.defPosition("o8", 336, 168, 24, 24);
    view.defPosition("p8", 360, 168, 24, 24);
    view.defPosition("q8", 384, 168, 24, 24);
    view.defPosition("r8", 408, 168, 24, 24);
    view.defPosition("s8", 432, 168, 24, 24);
    view.defPosition("t8", 456, 168, 24, 24);
    view.defPosition("a9", 0, 192, 24, 24);
    view.defPosition("b9", 24, 192, 24, 24);
    view.defPosition("c9", 48, 192, 24, 24);
    view.defPosition("d9", 72, 192, 24, 24);
    view.defPosition("e9", 96, 192, 24, 24);
    view.defPosition("f9", 120, 192, 24, 24);
    view.defPosition("g9", 144, 192, 24, 24);
    view.defPosition("h9", 168, 192, 24, 24);
    view.defPosition("i9", 192, 192, 24, 24);
    view.defPosition("j9", 216, 192, 24, 24);
    view.defPosition("k9", 240, 192, 24, 24);
    view.defPosition("l9", 264, 192, 24, 24);
    view.defPosition("m9", 288, 192, 24, 24);
    view.defPosition("n9", 312, 192, 24, 24);
    view.defPosition("o9", 336, 192, 24, 24);
    view.defPosition("p9", 360, 192, 24, 24);
    view.defPosition("q9", 384, 192, 24, 24);
    view.defPosition("r9", 408, 192, 24, 24);
    view.defPosition("s9", 432, 192, 24, 24);
    view.defPosition("t9", 456, 192, 24, 24);
    view.defPosition("a10", 0, 216, 24, 24);
    view.defPosition("b10", 24, 216, 24, 24);
    view.defPosition("c10", 48, 216, 24, 24);
    view.defPosition("d10", 72, 216, 24, 24);
    view.defPosition("e10", 96, 216, 24, 24);
    view.defPosition("f10", 120, 216, 24, 24);
    view.defPosition("g10", 144, 216, 24, 24);
    view.defPosition("h10", 168, 216, 24, 24);
    view.defPosition("i10", 192, 216, 24, 24);
    view.defPosition("j10", 216, 216, 24, 24);
    view.defPosition("k10", 240, 216, 24, 24);
    view.defPosition("l10", 264, 216, 24, 24);
    view.defPosition("m10", 288, 216, 24, 24);
    view.defPosition("n10", 312, 216, 24, 24);
    view.defPosition("o10", 336, 216, 24, 24);
    view.defPosition("p10", 360, 216, 24, 24);
    view.defPosition("q10", 384, 216, 24, 24);
    view.defPosition("r10", 408, 216, 24, 24);
    view.defPosition("s10", 432, 216, 24, 24);
    view.defPosition("t10", 456, 216, 24, 24);
    view.defPosition("a11", 0, 240, 24, 24);
    view.defPosition("b11", 24, 240, 24, 24);
    view.defPosition("c11", 48, 240, 24, 24);
    view.defPosition("d11", 72, 240, 24, 24);
    view.defPosition("e11", 96, 240, 24, 24);
    view.defPosition("f11", 120, 240, 24, 24);
    view.defPosition("g11", 144, 240, 24, 24);
    view.defPosition("h11", 168, 240, 24, 24);
    view.defPosition("i11", 192, 240, 24, 24);
    view.defPosition("j11", 216, 240, 24, 24);
    view.defPosition("k11", 240, 240, 24, 24);
    view.defPosition("l11", 264, 240, 24, 24);
    view.defPosition("m11", 288, 240, 24, 24);
    view.defPosition("n11", 312, 240, 24, 24);
    view.defPosition("o11", 336, 240, 24, 24);
    view.defPosition("p11", 360, 240, 24, 24);
    view.defPosition("q11", 384, 240, 24, 24);
    view.defPosition("r11", 408, 240, 24, 24);
    view.defPosition("s11", 432, 240, 24, 24);
    view.defPosition("t11", 456, 240, 24, 24);
    view.defPosition("a12", 0, 264, 24, 24);
    view.defPosition("b12", 24, 264, 24, 24);
    view.defPosition("c12", 48, 264, 24, 24);
    view.defPosition("d12", 72, 264, 24, 24);
    view.defPosition("e12", 96, 264, 24, 24);
    view.defPosition("f12", 120, 264, 24, 24);
    view.defPosition("g12", 144, 264, 24, 24);
    view.defPosition("h12", 168, 264, 24, 24);
    view.defPosition("i12", 192, 264, 24, 24);
    view.defPosition("j12", 216, 264, 24, 24);
    view.defPosition("k12", 240, 264, 24, 24);
    view.defPosition("l12", 264, 264, 24, 24);
    view.defPosition("m12", 288, 264, 24, 24);
    view.defPosition("n12", 312, 264, 24, 24);
    view.defPosition("o12", 336, 264, 24, 24);
    view.defPosition("p12", 360, 264, 24, 24);
    view.defPosition("q12", 384, 264, 24, 24);
    view.defPosition("r12", 408, 264, 24, 24);
    view.defPosition("s12", 432, 264, 24, 24);
    view.defPosition("t12", 456, 264, 24, 24);
    view.defPosition("a13", 0, 288, 24, 24);
    view.defPosition("b13", 24, 288, 24, 24);
    view.defPosition("c13", 48, 288, 24, 24);
    view.defPosition("d13", 72, 288, 24, 24);
    view.defPosition("e13", 96, 288, 24, 24);
    view.defPosition("f13", 120, 288, 24, 24);
    view.defPosition("g13", 144, 288, 24, 24);
    view.defPosition("h13", 168, 288, 24, 24);
    view.defPosition("i13", 192, 288, 24, 24);
    view.defPosition("j13", 216, 288, 24, 24);
    view.defPosition("k13", 240, 288, 24, 24);
    view.defPosition("l13", 264, 288, 24, 24);
    view.defPosition("m13", 288, 288, 24, 24);
    view.defPosition("n13", 312, 288, 24, 24);
    view.defPosition("o13", 336, 288, 24, 24);
    view.defPosition("p13", 360, 288, 24, 24);
    view.defPosition("q13", 384, 288, 24, 24);
    view.defPosition("r13", 408, 288, 24, 24);
    view.defPosition("s13", 432, 288, 24, 24);
    view.defPosition("t13", 456, 288, 24, 24);
}
